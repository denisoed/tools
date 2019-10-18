import test from 'ava';
import tools from '../src/index';

test('drop([1, 2, 3, 4]) should return [2, 3, 4]', t => {
  const result = tools.drop([1, 2, 3, 4]);
  t.deepEqual(result, [2, 3, 4]);
});

test('drop([1, 2, 3, 4], 0) should return [1, 2, 3, 4]', t => {
  const result = tools.drop([1, 2, 3, 4], 0);
  t.deepEqual(result, [1, 2, 3, 4]);
});

test('drop([1, 2, 3, 4], 5) should return []', t => {
  const result = tools.drop([1, 2, 3, 4], 5);
  t.deepEqual(result, []);
});

test('drop([1, 2, 3, 4], 2, true) should return [1, 2]', t => {
  const result = tools.drop([1, 2, 3, 4], 2, true);
  t.deepEqual(result, [1, 2]);
});

test('drop([1, 2, 3, 4], 0, true) should return [1, 2, 3, 4]', t => {
  const result = tools.drop([1, 2, 3, 4], 0, true);
  t.deepEqual(result, [1, 2, 3, 4]);
});

test('drop([1, 2, 3, 4], 8, true) should return []', t => {
  const result = tools.drop([1, 2, 3, 4], 8, true);
  t.deepEqual(result, []);
});
