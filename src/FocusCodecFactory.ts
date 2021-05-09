import { CodecFactory } from './CodecFactory'
import { Codec } from './Codec'
import { defaultCodecLabel } from './consts'

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// encode: async (stream, params) => {
//   if (!stream) return undefined
//
//   const encodedStream = new CodecAwareStream(stream)
//   encodedStream.codecLabel = codecLabel
//
//   return encodedStream
// },
//
// decode: async (encodedStream) => {
//   if (!encodedStream) return undefined
//
//   return new MediaStream(encodedStream)
// },

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
  getCodecForStream(stream?: MediaStream): Codec {
    return this.getCodec()
  }
}
