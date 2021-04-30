import { compose } from 'ramda'
import {
  chooseBestVideoCodec,
  encodeVideoStream,
  validateStream,
} from './utils'

export const encode = compose(
  encodeVideoStream,
  chooseBestVideoCodec,
  validateStream,
)
