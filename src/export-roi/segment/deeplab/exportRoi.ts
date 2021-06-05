import { load } from '@tensorflow-models/deeplab'
import ExportRoiInput from '../../types/ExportRoiInput'
import ExportRoiOutput from '../../types/ExportRoiOutput'

const exportRoi = async (input: ExportRoiInput): Promise<ExportRoiOutput> => {
  const wrappedModel = await load({ base: 'pascal', quantizationBytes: 4 })

  const predictions = await wrappedModel.segment(input)

  return {
    type: 'segment',
    ...predictions,
  }
}

export default exportRoi
