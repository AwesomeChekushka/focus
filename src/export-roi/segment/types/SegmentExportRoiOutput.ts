type Color = [number, number, number]
interface Legend {
  [name: string]: Color
}

interface SegmentExportRoiOutput {
  type: 'segment'
  height: number
  width: number
  legend: Legend
  segmentationMap: Uint8ClampedArray
}

export default SegmentExportRoiOutput
