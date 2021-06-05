import SegmentExportRoiOutput from '../segment/types/SegmentExportRoiOutput'
import BboxExportRoiOutput from '../bbox/types/BboxExportRoiOutput'
import DepthExportRoiOutput from '../depth/types/DepthExportRoiOutput'

type ExportRoiOutput =
  | BboxExportRoiOutput
  | SegmentExportRoiOutput
  | DepthExportRoiOutput

export default ExportRoiOutput
