import { Codec } from './Codec'
import { Stream } from './types'

export interface CodecFactory {
  getCodec(codecLabel: string): Codec
  getCodecForStream(stream: Stream): Codec
}
