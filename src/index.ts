import decode from './focus-api/decode'
import encode from './focus-api/encode'
import config from './focus-api/config'
import reset from './focus-api/reset'
import setExportRoi from './focus-api/setExportRoi'
import setControlRate from './focus-api/setControlRate'

const Focus = {
  config,
  decode,
  encode,
  reset,
  setExportRoi,
  setControlRate,
}

export default Focus
