import ExportRoiInput from './ExportRoiInput'
import ExportRoiOutput from './ExportRoiOutput'

interface ExportRoi {
  (input: ExportRoiInput): Promise<ExportRoiOutput>
}

export default ExportRoi
