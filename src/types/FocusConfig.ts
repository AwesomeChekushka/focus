import HTMLCanvasElementWithCaptureStream from './HTMLCanvasElementWithCaptureStream'
import ControlRate from '../control-rate/types/ControlRate'
import ExportRoi from '../export-roi/types/ExportRoi'

interface FocusConfig {
  canvas: HTMLCanvasElementWithCaptureStream
  video: HTMLVideoElement
  controlRate: ControlRate
  exportRoi: ExportRoi
}

export default FocusConfig
