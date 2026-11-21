import test from "node:test";
import request from "supertest";
import assert from 'node:assert/strict';
import app from "../server.js";

test('GET / return greeting', async () => {
  const res = await request(app).get('/');
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { id: 123, message: 'hello!!!!' });
});
