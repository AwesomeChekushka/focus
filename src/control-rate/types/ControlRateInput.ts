import ExportRoiInput from '../../export-roi/types/ExportRoiInput'
import ExportRoiOutput from '../../export-roi/types/ExportRoiOutput'

interface ControlRateInput {
  origin: ExportRoiInput
  rois: ExportRoiOutput
}

export default ControlRateInput
