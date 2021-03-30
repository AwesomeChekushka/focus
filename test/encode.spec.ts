import { encode } from '../src';

test('encode function smoke test', () => {
  expect(encode('whatever')).toBe('whatever');
});
