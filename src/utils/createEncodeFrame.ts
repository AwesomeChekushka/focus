import EncodeParams from '../types/EncodeParams'
import ExportRoi from '../export-roi/types/ExportRoi'
import ControlRate from '../control-rate/ControlRate'
import EncodeFrame from '../types/EncodeFrame'

/** @internal */
const createEncodeFrame = (
  encodeParams: EncodeParams,
  controlRate: ControlRate,
  exportRoi: ExportRoi,
): EncodeFrame => {
  const { getBandwidth } = encodeParams

  return async (input) => {
    const rois = await exportRoi(input)

    return controlRate(getBandwidth, {
      origin: input,
      rois,
    })
  }
}

export default createEncodeFrame
