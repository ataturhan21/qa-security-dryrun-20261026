const http = require('node:http');
const { getPage } = require('./items');

const PORT = Number(process.env.PORT) || 3456;

function page(body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>QA sample</title></head><body>${body}</body></html>`;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page('<h1>Welcome</h1><form action="/greet"><label>Name <input name="name"></label><button>Greet</button></form><p><a href="/items?page=1">Browse items</a></p>'));
  } else if (url.pathname === '/greet') {
    const name = url.searchParams.get('name') || 'guest';
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page(`<h1>Hello ${name}</h1><p><a href="/">Back</a></p>`));
  } else if (url.pathname === '/items') {
    const n = Number(url.searchParams.get('page')) || 1;
    const list = getPage(n).map((i) => `<li>${i.name}</li>`).join('');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page(`<h1>Items, page ${n}</h1><ul>${list}</ul>`));
  } else if (url.pathname === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end('{"ok":true}');
  } else {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page('<h1>Not found</h1>'));
  }
});

if (require.main === module) server.listen(PORT, '127.0.0.1', () => console.log(`http://127.0.0.1:${PORT}`));
module.exports = server;
