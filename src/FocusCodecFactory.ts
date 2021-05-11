import { CodecFactory } from './CodecFactory'
import { Codec } from './Codec'
import { defaultCodecLabel } from './constants'

export class FocusCodecFactory implements CodecFactory {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCodec(codecLabel: string = defaultCodecLabel): Codec {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      encode: async (stream, params) => {
        return undefined
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      decode: async (stream) => {
        return undefined
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCodecForStream(stream: MediaStream, mode = 'auto'): Codec {
    return this.getCodec()
  }
}
