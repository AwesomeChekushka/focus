export interface CodecAwareStream extends MediaStream {
  codecLabel: string
}
export type EncodedStream = CodecAwareStream

export interface EncodeParams {
  connectionQuality: number
}

export interface Encode {
  (stream?: MediaStream, params?: EncodeParams): Promise<undefined | EncodedStream>
}
export interface Decode {
  (stream?: EncodedStream): Promise<undefined | MediaStream>
}
