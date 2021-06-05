type Color = [number, number, number]
interface Legend {
  [name: string]: Color
}

interface SegmentExportRoiOutput {
  height: number
  width: number
  legend: Legend
  segmentationMap: Uint8ClampedArray
  type: 'segment'
}

export default SegmentExportRoiOutput
