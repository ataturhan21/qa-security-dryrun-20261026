const test = require('node:test');
const assert = require('node:assert');
const { ITEMS } = require('../items');

test('catalog has 25 items', () => {
  assert.strictEqual(ITEMS.length, 25);
});
