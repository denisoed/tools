import test from 'ava';
import tools from '../src/index';

test('chunk([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]', t => {
  const result = tools.chunk([1, 2, 3, 4], 2);
  t.deepEqual(result, [[1, 2], [3, 4]]);
});

test('chunk([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]]', t => {
  const result = tools.chunk([1, 2, 3, 4, 5, 6], 3);
  t.deepEqual(result, [[1, 2, 3], [4, 5, 6]]);
});

test('chunk([1, 2, 3, 4, 5, 6, 7], 3) should return [[1, 2, 3], [4, 5, 6], [7]]', t => {
  const result = tools.chunk([1, 2, 3, 4, 5, 6, 7], 3);
  t.deepEqual(result, [[1, 2, 3], [4, 5, 6], [7]]);
});

test('chunk([1, 2, 3, 4, 5, 6, 7], 1) should return [[1], [2], [3], [4], [5], [6], [7]]', t => {
  const result = tools.chunk([1, 2, 3, 4, 5, 6, 7], 1);
  t.deepEqual(result, [[1], [2], [3], [4], [5], [6], [7]]);
});

test('chunk([1, 2, 3, 4, 5], 8) should return [[1, 2, 3, 4, 5]]', t => {
  const result = tools.chunk([1, 2, 3, 4, 5], 8);
  t.deepEqual(result, [[1, 2, 3, 4, 5]]);
});

test('chunk([1, 2, 3, 4, 5], 0.5) should return [[1], [2], [3], [4], [5]]', t => {
  const result = tools.chunk([1, 2, 3, 4, 5], 0.5);
  t.deepEqual(result, [[1], [2], [3], [4], [5]]);
});

test('chunk([1, 2, 3], 0) should return [[1], [2], [3]]', t => {
  const result = tools.chunk([1, 2, 3], 0);
  t.deepEqual(result, [[1], [2], [3]]);
});

test('chunk([1, 2, 3], 4) should return [[1, 2, 3]]', t => {
  const result = tools.chunk([1, 2, 3], 4);
  t.deepEqual(result, [[1, 2, 3]]);
});
