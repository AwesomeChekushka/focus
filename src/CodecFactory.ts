import { Codec } from './Codec'

export interface CodecFactory {
  getCodec(codecLabel: string): Codec
  getCodecForStream(
    stream: MediaStream,
    mode?: 'auto' | 'quality' | 'performance' | 'speed' | 'stability',
  ): Codec
}
