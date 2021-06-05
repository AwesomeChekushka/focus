import ExportRoi from './types/ExportRoi'
import BboxExportRoiLabel from './bbox/types/BboxExportRoiLabel'
import NotImplementedError from '../errors/NotImplementedError'
import DepthExportRoiLabel from './depth/types/DepthExportRoiLabel'
import ExportRoiLabel from '../types/ExportRoiLabel'
import SegmentExportRoiLabel from './segment/types/SegmentExportRoiLabel'
import UnknownExportRoiAlgorithmError from '../errors/UnknownExportRoiAlgorithmError'
import bboxDummyExportRoi from './bbox/dummy/exportRoi'
import depthDummyExportRoi from './depth/dummy/exportRoi'
import segmentDummyExportRoi from './segment/dummy/exportRoi'
import segmentDeeplabExportRoi from './segment/deeplab/exportRoi'

const getExportRoi = (label: ExportRoiLabel): ExportRoi => {
  switch (label) {
    case BboxExportRoiLabel.Dummy:
      return bboxDummyExportRoi
    case BboxExportRoiLabel.Coco:
      throw new NotImplementedError('Bbox.Coco.exportRoi')
    case DepthExportRoiLabel.Dummy:
      return depthDummyExportRoi
    case DepthExportRoiLabel.Kmeans:
      throw new NotImplementedError('Bbox.Kmeans.exportRoi')
    case DepthExportRoiLabel.AdaBins:
      throw new NotImplementedError('Bbox.AdaBins.exportRoi')
    case SegmentExportRoiLabel.Dummy:
      return segmentDummyExportRoi
    case SegmentExportRoiLabel.Deeplab:
      return segmentDeeplabExportRoi
    default:
      throw new UnknownExportRoiAlgorithmError(label)
  }
}

export default getExportRoi
