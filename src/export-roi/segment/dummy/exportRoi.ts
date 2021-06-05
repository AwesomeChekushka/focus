import { repeat } from 'ramda'
import ExportRoiInput from '../../types/ExportRoiInput'
import ExportRoiOutput from '../../types/ExportRoiOutput'

const exportRoi = async (input: ExportRoiInput): Promise<ExportRoiOutput> => {
  const { height, width } = input
  const segmentationMap = new Uint8ClampedArray(repeat(255, width * height * 4))

  return Promise.resolve({
    type: 'segment',
    height,
    width,
    legend: { important: [255, 255, 255] },
    segmentationMap,
  })
}

export default exportRoi
