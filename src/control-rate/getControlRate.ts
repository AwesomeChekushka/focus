import ControlRate from './types/ControlRate'
import ControlRateLabel from '../types/ControlRateLabel'
import NotImplementedError from '../errors/NotImplementedError'
import UnknownControlRateAlgorithmError from '../errors/UnknownControlRateAlgorithmError'
import Dummy from './dummy'

const getControlRate = (label: ControlRateLabel): ControlRate => {
  switch (label) {
    case ControlRateLabel.Dummy:
      return Dummy.controlRate
    case ControlRateLabel.NearestNeighbour:
      throw new NotImplementedError('NearestNeighbour.exportRoi')
    default:
      throw new UnknownControlRateAlgorithmError(label)
  }
}

export default getControlRate
