interface HTMLCanvasElementWithCaptureStream extends HTMLCanvasElement {
  captureStream(frameRate?: number): MediaStream
}

export default HTMLCanvasElementWithCaptureStream
