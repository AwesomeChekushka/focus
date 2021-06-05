interface BboxExportRoiOutput {
  type: 'bbox'
  bbox: [number, number, number, number] // x, y, width, height
  class: string
}

export default BboxExportRoiOutput
