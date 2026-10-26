# QA sample app

A tiny throwaway Node app used to test the qa-bug-hunt skill. No dependencies.

## Run

    npm start      # http://127.0.0.1:3456
    npm test

## Expected behavior

- `/` shows a greeting form.
- `/greet?name=<name>` greets the visitor; the name is shown as plain text.
- `/items?page=1` shows the first 10 items (Item 1 to Item 10); page 2 shows items 11 to 20; page 3 shows 21 to 25.
- `/health` returns `{"ok":true}`.
