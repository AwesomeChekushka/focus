class UnknownRoiTypeError extends Error {
  name = 'UnknownRoiType'

  constructor(typeLabel?: string) {
    super(`The ROI type with label ${typeLabel} is unknown.`)
  }
}

export default UnknownRoiTypeError
