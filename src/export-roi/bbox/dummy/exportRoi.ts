import ExportRoiInput from '../../types/ExportRoiInput'
import ExportRoiOutput from '../../types/ExportRoiOutput'

const exportRoi = async (input: ExportRoiInput): Promise<ExportRoiOutput> => {
  const { height, width } = input

  return Promise.resolve({
    type: 'bbox',
    bbox: [0, width * height, width, height],
    class: 'important',
  })
}

export default exportRoi
