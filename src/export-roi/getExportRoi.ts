import ExportRoi from './types/ExportRoi'
import BboxExportRoiLabel from './bbox/types/BboxExportRoiLabel'
import NotImplementedError from '../errors/NotImplementedError'
import Bbox from './bbox'
import DepthExportRoiLabel from './depth/types/DepthExportRoiLabel'
import ExportRoiLabel from '../types/ExportRoiLabel'
import Depth from './depth'
import Segment from './segment'
import SegmentExportRoiLabel from './segment/types/SegmentExportRoiLabel'
import UnknownExportRoiAlgorithmError from '../errors/UnknownExportRoiAlgorithmError'

const getExportRoi = (label: ExportRoiLabel): ExportRoi => {
  switch (label) {
    case BboxExportRoiLabel.Dummy:
      return Bbox.Dummy.exportRoi
    case BboxExportRoiLabel.Coco:
      throw new NotImplementedError('Bbox.Coco.exportRoi')
    case DepthExportRoiLabel.Dummy:
      return Depth.Dummy.exportRoi
    case DepthExportRoiLabel.Kmeans:
      throw new NotImplementedError('Bbox.Kmeans.exportRoi')
    case DepthExportRoiLabel.Vid2Depth:
      throw new NotImplementedError('Bbox.Vid2Depth.exportRoi')
    case SegmentExportRoiLabel.Dummy:
      return Segment.Dummy.exportRoi
    case SegmentExportRoiLabel.Deeplab:
      return Segment.Deeplab.exportRoi
    default:
      throw new UnknownExportRoiAlgorithmError(label)
  }
}

export default getExportRoi
