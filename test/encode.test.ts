import { encode } from "../src";
import { MediaStream } from "./mocks/media-stream";
import { MediaSource } from "./mocks/media-source";

test.each([Blob, MediaStream, MediaSource])(
  "encode smoke test",
  async (format) => {
    // given
    const stream = new format();
    // when
    const result = await encode(stream);
    // then
    expect(result).toBe(stream);
  }
);
