import { CodecFactory } from './CodecFactory'
import { Codec } from './Codec'
import { Stream } from './types'
import { defaultCodecLabel } from './consts'
import { CodecAwareStream } from './CodecAwareStream'

export class FocusCodecFactory implements CodecFactory {
  getCodec(codecLabel: string = defaultCodecLabel): Codec {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      encode: async (stream, params) => {
        if (!stream) return undefined

        const encodedStream = new CodecAwareStream(stream)
        encodedStream.codecLabel = codecLabel

        return encodedStream
      },

      decode: async (encodedStream) => {
        if (!encodedStream) return undefined

        return new MediaStream(encodedStream)
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCodecForStream(stream?: Stream): Codec {
    return this.getCodec()
  }
}
