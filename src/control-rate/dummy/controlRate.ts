import GetBandwidth from '../../types/GetBandwidth'
import ControlRateOutput from '../types/ControlRateOutput'
import ControlRateInput from '../types/ControlRateInput'

const controlRate = (
  _getBandwidth: GetBandwidth,
  input: ControlRateInput,
): Promise<ControlRateOutput> => {
  const { origin } = input

  if (origin instanceof ImageData) {
    return Promise.resolve(origin)
  }

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) throw new Error('Canvas context was undefined')

  canvas.width = origin.width
  canvas.height = origin.height
  context.drawImage(origin, 0, 0)

  return Promise.resolve(
    context.getImageData(0, 0, origin.width, origin.height),
  )
}

export default controlRate
