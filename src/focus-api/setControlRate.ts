import FocusConfig from '../types/FocusConfig'
import config from './config'
import ControlRate from '../control-rate/types/ControlRate'
import ControlRateLabel from '../types/ControlRateLabel'
import getControlRate from '../control-rate/getControlRate'

const internalSetControlRate = (controlRate: ControlRate): FocusConfig => {
  const configObj = config()
  configObj.controlRate = controlRate

  return config(configObj)
}

const setControlRateByLabel = (label: ControlRateLabel): FocusConfig => {
  return internalSetControlRate(getControlRate(label))
}

const setControlRate = (
  controlRate: ControlRateLabel | ControlRate,
): FocusConfig => {
  if (typeof controlRate === 'string') {
    return setControlRateByLabel(controlRate)
  }

  return internalSetControlRate(controlRate)
}

export default setControlRate
