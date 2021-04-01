import { decode } from '../src';

test('decode smoke test', async () => {
  // given
  const stream = new Blob();
  // when
  const result = await decode(stream);
  // then
  expect(result).toBe(stream);
});
