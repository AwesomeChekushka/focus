interface DepthExportRoiOutput {
  type: 'depth'
  depthMap: Uint8ClampedArray
  height: number
  width: number
}

export default DepthExportRoiOutput
