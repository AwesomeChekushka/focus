import EncodeFrame from '../types/EncodeFrame'

/** @internal */
const update = async (
  encodeFrame: EncodeFrame,
  target: HTMLCanvasElement,
  source: HTMLVideoElement,
): Promise<void> => {
  const context = target.getContext('2d')

  const encodedFrame = await encodeFrame(source)

  context?.putImageData(encodedFrame, 0, 0)

  requestAnimationFrame(() => update(encodeFrame, target, source))
}

export default update
