import { decode } from '../src';

test('decode function smoke test', () => {
  expect(decode('whatever')).toBe('whatever');
});
