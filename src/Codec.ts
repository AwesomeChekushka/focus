import { Decode, Encode } from './types'

export interface Codec {
  encode: Encode
  decode: Decode
}
