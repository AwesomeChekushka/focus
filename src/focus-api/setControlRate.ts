import FocusConfig from '../types/FocusConfig'
import config from './config'
import ControlRate from '../control-rate/ControlRate'
import ControlRateLabel from '../types/ControlRateLabel'
import getControlRate from '../control-rate/getControlRate'

const internalSetControlRate = (controlRate: ControlRate): FocusConfig => {
  const configObj = config()
  configObj.controlRate = controlRate

  return config(configObj)
}

const setControlRateByLabel = async (
  label: ControlRateLabel,
): Promise<FocusConfig> => {
  return internalSetControlRate(await getControlRate(label))
}

const setControlRate = (
  controlRate: ControlRateLabel | ControlRate,
): Promise<FocusConfig> => {
  if (typeof controlRate === 'string') {
    return setControlRateByLabel(controlRate)
  }

  return Promise.resolve(internalSetControlRate(controlRate))
}

export default setControlRate
