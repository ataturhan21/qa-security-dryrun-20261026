# QA Bug Hunt Fixture

A disposable, dependency-free Node.js application used for public-repository QA testing. The repository is a test fixture, not an application starter.

## Run locally

Requires **Node.js 20 or newer**, as declared in [package.json](package.json).

```bash
npm start
```

Open http://127.0.0.1:3456. The standalone server binds to `127.0.0.1`; `PORT` can select another port. Stop it with `Ctrl+C`.

Run the baseline check from the repository root:

```bash
npm test
```

No dependency installation is required.

## Expected behavior

This table is the contract a QA run should check. The fixture deliberately contains discrepancies for the QA workflow to find; preserving those discrepancies is part of maintaining the fixture.

| Route | Expected result |
| --- | --- |
| `/` | A greeting form |
| `/greet?name=<name>` | The visitor's name displayed as plain text |
| `/items?page=1` | Items 1–10 |
| `/items?page=2` | Items 11–20 |
| `/items?page=3` | Items 21–25 |
| `/health` | JSON `{"ok":true}` |
| Unknown route | HTTP 404 |

## Repository map

- [server.js](server.js): HTTP routes and HTML responses.
- [items.js](items.js): the item catalog and pagination helper.
- [test/basic.test.js](test/basic.test.js): the baseline catalog-size assertion.

The baseline test checks that the catalog contains 25 items. A passing result does not establish that every route meets the contract above. Keep QA findings and regression work separate from the deliberately flawed baseline when using this repository for repeated evaluations.
