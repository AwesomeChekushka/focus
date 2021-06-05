import { clone } from 'ramda'
import FocusConfig from '../types/FocusConfig'
import getDefaultConfig from '../utils/getDefaultConfig'

let configObj = getDefaultConfig()

const config = (newConfig?: FocusConfig): FocusConfig => {
  if (newConfig) {
    configObj = clone(newConfig)
  }

  return configObj
}

export default config
