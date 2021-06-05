import { repeat } from 'ramda'
import ExportRoiInput from '../../types/ExportRoiInput'
import ExportRoiOutput from '../../types/ExportRoiOutput'

const exportRoi = async (input: ExportRoiInput): Promise<ExportRoiOutput> => {
  const { height, width } = input
  const depthMap = new Uint8ClampedArray(repeat(255, width * height * 4))

  return Promise.resolve({
    type: 'depth',
    height,
    width,
    depthMap,
  })
}

export default exportRoi
