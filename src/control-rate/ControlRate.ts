import ExportRoiOutput from '../export-roi/types/ExportRoiOutput'
import ControlRateOutput from './ControlRateOutput'
import GetBandwidth from '../types/GetBandwidth'
import ExportRoiInput from '../export-roi/types/ExportRoiInput'

interface ControlRateInput {
  origin: ExportRoiInput
  rois: ExportRoiOutput
}

interface ControlRate {
  (getBandwidth: GetBandwidth, input: ControlRateInput): ControlRateOutput
}

export default ControlRate
