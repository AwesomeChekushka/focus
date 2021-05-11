import { CodecFactory } from './CodecFactory'
import { Codec } from './Codec'
import { defaultCodecLabel } from './constants'
import { NotImplementedException } from './error'

export class FocusCodecFactory implements CodecFactory {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCodec(codecLabel: string = defaultCodecLabel): Codec {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      encode: async (stream, params) => {
        throw new NotImplementedException()
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      decode: async (stream) => {
        throw new NotImplementedException()
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCodecForStream(stream: MediaStream, mode = 'auto'): Codec {
    return this.getCodec()
  }
}
