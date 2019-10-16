import test from 'ava';
import tools from '../src/index';

test('compact([1, 2, "", 4]) should return [1, 2, 4]', t => {
  const result = tools.compact([1, 2, "", 4]);
  t.deepEqual(result, [1, 2, 4]);
});

test('compact([1, 2, "!!!"]) should return [1, 2, "!!!"]', t => {
  const result = tools.compact([1, 2, "!!!"]);
  t.deepEqual(result, [1, 2, "!!!"]);
});

test('compact([1, 2, "wrong"], [1, "wrong"]) should return [2]', t => {
  const result = tools.compact([1, 2, "wrong"], [1, "wrong"]);
  t.deepEqual(result, [2]);
});

test('compact([0, 1, 2], [0]) should return [1, 2]', t => {
  const result = tools.compact([0, 1, 2], [0]);
  t.deepEqual(result, [1, 2]);
});
