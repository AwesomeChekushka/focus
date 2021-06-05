import ControlRateOutput from './ControlRateOutput'
import GetBandwidth from '../../types/GetBandwidth'
import ControlRateInput from './ControlRateInput'

interface ControlRate {
  (
    getBandwidth: GetBandwidth,
    input: ControlRateInput,
  ): Promise<ControlRateOutput>
}

export default ControlRate
