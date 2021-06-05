import GetBandwidth from '../../types/GetBandwidth'
import ControlRateOutput from '../types/ControlRateOutput'
import ControlRateInput from '../types/ControlRateInput'

const controlRate = (
  _getBandwidth: GetBandwidth,
  input: ControlRateInput,
): Promise<ControlRateOutput> => {
  const { origin } = input

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) throw new Error('Canvas context was undefined')

  const width = origin.videoWidth
  const height = origin.videoHeight

  canvas.width = width
  canvas.height = height
  context.drawImage(origin, 0, 0)

  return Promise.resolve(context.getImageData(0, 0, width, height))
}

export default controlRate
