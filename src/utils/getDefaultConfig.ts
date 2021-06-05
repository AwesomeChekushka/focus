import FocusConfig from '../types/FocusConfig'
import HTMLCanvasElementWithCaptureStream from '../types/HTMLCanvasElementWithCaptureStream'
import UnsupportedBrowserError from '../errors/UnsupportedBrowserError'
import getExportRoi from '../export-roi/getExportRoi'
import SegmentExportRoiLabel from '../export-roi/segment/types/SegmentExportRoiLabel'
import getControlRate from '../control-rate/getControlRate'
import ControlRateLabel from '../types/ControlRateLabel'

/** @internal */
const getDefaultConfig = (): FocusConfig => {
  const canvas = <HTMLCanvasElementWithCaptureStream>(
    document.createElement('canvas')
  )

  if (canvas.captureStream === undefined) {
    throw new UnsupportedBrowserError(
      "A method 'captureStream' has no implementation in the current browser",
    )
  }

  canvas.style.width = '100%'
  canvas.style.height = '100%'

  const video = document.createElement('video')
  const exportRoi = getExportRoi(SegmentExportRoiLabel.Deeplab)
  const controlRate = getControlRate(ControlRateLabel.NearestNeighbour)

  return {
    canvas,
    video,
    exportRoi,
    controlRate,
  }
}

export default getDefaultConfig
