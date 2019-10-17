import test from 'ava';
import tools from '../src/index';

test('pullAll([1, 2, 3, 4], [2, 4]) should return [1, 3]', t => {
  const result = tools.pullAll([1, 2, 3, 4], [2, 4]);
  t.deepEqual(result, [1, 3]);
});

test('pullAll([1, 2, 3, 4], [3]) should return [1, 2, 4]', t => {
  const result = tools.pullAll([1, 2, 3, 4], [3]);
  t.deepEqual(result, [1, 2, 4]);
});

test('pullAll([1, 2, 3, "a"], [2, 4, "a"]) should return [1, 3]', t => {
  const result = tools.pullAll([1, 2, 3, "a"], [2, 4, "a"]);
  t.deepEqual(result, [1, 3]);
});
