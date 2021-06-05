import ExportRoiInput from '../export-roi/types/ExportRoiInput'
import ControlRateOutput from '../control-rate/ControlRateOutput'

/** @internal */
type EncodeFrameInput = ExportRoiInput
/** @internal */
type EncodeFrameOutput = ControlRateOutput

/** @internal */
interface EncodeFrame {
  (input: EncodeFrameInput): Promise<EncodeFrameOutput>
}

export default EncodeFrame
