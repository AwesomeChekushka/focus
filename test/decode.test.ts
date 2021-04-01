import { MediaStream } from "./mocks/media-stream";
import { MediaSource } from "./mocks/media-source";
import { decode } from "../src";

test.each([Blob, MediaStream, MediaSource])(
  "decode smoke test",
  async (format) => {
    // given
    const stream = new format();
    // when
    const result = await decode(stream);
    // then
    expect(result).toBe(stream);
  }
);
