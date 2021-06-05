import { DeepLabOutput } from '@tensorflow-models/deeplab/dist/types'
import GetBandwidth from '../../types/GetBandwidth'
import ControlRateOutput from '../types/ControlRateOutput'
import ControlRateInput from '../types/ControlRateInput'
import UnknownRoiTypeError from '../../errors/UnknownRoiTypeError'
import NotImplementedError from '../../errors/NotImplementedError'
import SegmentExportRoiOutput from '../../export-roi/segment/types/SegmentExportRoiOutput'
import ExportRoiInput from '../../export-roi/types/ExportRoiInput'

const scaledSegmentationData = async (
  origin: ExportRoiInput,
  rois: SegmentExportRoiOutput,
): Promise<ImageData> => {
  const { height, width, segmentationMap } = rois

  const target = document.createElement('canvas')
  const context = target.getContext('2d')

  if (!context) throw new Error('Canvas context was undefined')

  target.width = origin.videoWidth
  target.height = origin.videoHeight

  const segmentationData = new ImageData(segmentationMap, width)

  const ibm = await createImageBitmap(segmentationData, 0, 0, width, height, {
    resizeWidth: target.width,
    resizeHeight: target.height,
  })

  context.drawImage(ibm, 0, 0)
  return context.getImageData(0, 0, target.width, target.height)
}

const segmentControlRate = async (
  getBandwidth: GetBandwidth,
  rois: SegmentExportRoiOutput,
  origin: ExportRoiInput,
): Promise<ControlRateOutput> => {
  const scaledRois = await scaledSegmentationData(origin, rois)

  const
}

const controlRate = async (
  getBandwidth: GetBandwidth,
  input: ControlRateInput,
): Promise<ControlRateOutput> => {
  const { origin, rois } = input

  switch (rois.type) {
    case 'bbox':
      throw new NotImplementedError()
    case 'depth':
      throw new NotImplementedError()
    case 'segment':
      return segmentControlRate(getBandwidth, rois, origin)
    default:
      throw new UnknownRoiTypeError()
  }

  // const canvas = document.createElement('canvas')
  // const context = canvas.getContext('2d')
  //
  // if (!context) throw new Error('Canvas context was undefined')
  //
  // const width = origin.videoWidth
  // const height = origin.videoHeight
  //
  // canvas.width = width
  // canvas.height = height
  // context.drawImage(origin, 0, 0)
  //
  // return Promise.resolve(context.getImageData(0, 0, width, height))
}

export default controlRate
