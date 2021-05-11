interface EncodedStream extends MediaStream {
  codecLabel: string
}

interface EncodeParams {
  connectionQuality: number
}

export interface Codec {
  encode(stream: MediaStream, params?: EncodeParams): Promise<EncodedStream>
  decode(stream: EncodedStream): Promise<MediaStream>
}
