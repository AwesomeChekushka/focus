export type Stream = MediaStream
export interface CodecAwareStream extends Stream {
  codecLabel: string
}
export type EncodedStream = CodecAwareStream

export interface EncodeParams {
  connectionQuality: number
}

export interface Encode {
  (stream?: Stream, params?: EncodeParams): Promise<undefined | EncodedStream>
}
export interface Decode {
  (stream?: EncodedStream): Promise<undefined | Stream>
}
