class UnknownExportRoiAlgorithmError extends Error {
  name = 'UnknownExportRoiAlgorithm'

  constructor(algorithmLabel: string) {
    super(`The ExportRoi algorithm with label = ${algorithmLabel} is unknown.`)
  }
}

export default UnknownExportRoiAlgorithmError
