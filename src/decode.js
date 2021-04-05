import { compose } from 'ramda'
import { decodeVideoStream, validateEncodedStream } from './utils'

export const decode = compose(decodeVideoStream, validateEncodedStream)
