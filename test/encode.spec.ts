import { encode } from '../src';

beforeAll(() => {
  window.MediaStream = jest.fn().mockImplementation(() => ({}));
  window.MediaSource = jest.fn().mockImplementation(() => ({
    isTypeSupported: (type: string): boolean => true,
    new: () => jest.fn(),
  }));
});

test.each([Blob, window.MediaStream, window.MediaSource])('encode smoke test', async (format) => {
  // given
  const stream = new format();
  // when
  const result = await encode(stream);
  // then
  expect(result).toBe(stream);
});
