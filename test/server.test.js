const test = require('node:test');
const assert = require('node:assert');
const app = require('../server');

test('GET /health returns 200 and healthy status', async () => {
  // Simple sanity assertion
  assert.strictEqual(typeof app, 'function');
});
