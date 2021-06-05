import ControlRate from './ControlRate'
import ControlRateLabel from '../types/ControlRateLabel'
import NotImplementedError from '../errors/NotImplementedError'
import UnknownControlRateAlgorithmError from '../errors/UnknownControlRateAlgorithmError'

const getControlRate = (label: ControlRateLabel): ControlRate => {
  switch (label) {
    case ControlRateLabel.Dummy:
      throw new NotImplementedError('Dummy.exportRoi')
    case ControlRateLabel.NearestNeighbour:
      throw new NotImplementedError('NearestNeighbour.exportRoi')
    default:
      throw new UnknownControlRateAlgorithmError(label)
  }
}

export default getControlRate
