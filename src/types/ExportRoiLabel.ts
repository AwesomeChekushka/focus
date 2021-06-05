import SegmentExportRoiLabel from '../export-roi/segment/types/SegmentExportRoiLabel'
import DepthExportRoiLabel from '../export-roi/depth/types/DepthExportRoiLabel'
import BboxExportRoiLabel from '../export-roi/bbox/types/BboxExportRoiLabel'

type ExportRoiLabel =
  | BboxExportRoiLabel
  | DepthExportRoiLabel
  | SegmentExportRoiLabel

export default ExportRoiLabel
