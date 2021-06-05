import ControlRate from './types/ControlRate'
import ControlRateLabel from '../types/ControlRateLabel'
import UnknownControlRateAlgorithmError from '../errors/UnknownControlRateAlgorithmError'
import dummyControlRate from './dummy/controlRate'
import nearestNeighbourControlRate from './nearest-neighbour/controlRate'

const getControlRate = (label: ControlRateLabel): ControlRate => {
  switch (label) {
    case ControlRateLabel.Dummy:
      return dummyControlRate
    case ControlRateLabel.NearestNeighbour:
      return nearestNeighbourControlRate
    default:
      throw new UnknownControlRateAlgorithmError(label)
  }
}

export default getControlRate
