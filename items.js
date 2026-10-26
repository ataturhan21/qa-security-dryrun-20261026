// 25 catalog items, paged 10 per page. Pages start at 1.
const ITEMS = Array.from({ length: 25 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
const PAGE_SIZE = 10;

function getPage(page) {
  const start = page * PAGE_SIZE;
  return ITEMS.slice(start, start + PAGE_SIZE);
}

module.exports = { ITEMS, PAGE_SIZE, getPage };
