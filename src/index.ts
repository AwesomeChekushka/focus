import decode from './focus-api/decode'
import encode from './focus-api/encode'
import config from './focus-api/config'
import reset from './focus-api/reset'
import setExportRoi from './focus-api/setExportRoi'
import setControlRate from './focus-api/setControlRate'
import BboxExportRoiLabel from './export-roi/bbox/types/BboxExportRoiLabel'
import DepthExportRoiLabel from './export-roi/depth/types/DepthExportRoiLabel'
import SegmentExportRoiLabel from './export-roi/segment/types/SegmentExportRoiLabel'
import ControlRateLabel from './types/ControlRateLabel'
import EncodeParams from './types/EncodeParams'
import ExportRoiLabel from './types/ExportRoiLabel'
import FocusConfig from './types/FocusConfig'
import GetBandwidth from './types/GetBandwidth'
import '@tensorflow/tfjs-backend-webgl'
import ExportRoi from './export-roi/types/ExportRoi'
import ControlRate from './control-rate/types/ControlRate'

export { BboxExportRoiLabel, DepthExportRoiLabel, SegmentExportRoiLabel }
export {
  ControlRateLabel,
  EncodeParams,
  ExportRoiLabel,
  FocusConfig,
  GetBandwidth,
  ExportRoi,
  ControlRate,
}

const Focus = {
  config,
  decode,
  encode,
  reset,
  setExportRoi,
  setControlRate,
}

export default Focus
