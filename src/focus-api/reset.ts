import getDefaultConfig from '../utils/getDefaultConfig'
import config from './config'
import FocusConfig from '../types/FocusConfig'

const reset = (): FocusConfig => config(getDefaultConfig())

export default reset
