import InvalidArgumentError from '../errors/InvalidArgumentError'
import EncodeParams from '../types/EncodeParams'
import update from '../utils/update'
import config from './config'
import createEncodeFrame from '../utils/createEncodeFrame'

const encode = async (
  params: EncodeParams,
  videoTrack: MediaStreamTrack,
): Promise<MediaStreamTrack> => {
  const { canvas, video, exportRoi, controlRate } = config()

  if (videoTrack.kind !== 'video')
    throw new InvalidArgumentError('videoTrack.kind', videoTrack.kind)

  video.srcObject = new MediaStream([videoTrack])
  await video.play()

  const encodeFrame = createEncodeFrame(params, controlRate, exportRoi)

  video.addEventListener('playing', () => {
    update(encodeFrame, canvas, video)
  })

  return canvas.captureStream(30).getVideoTracks()[0]
}

export default encode
