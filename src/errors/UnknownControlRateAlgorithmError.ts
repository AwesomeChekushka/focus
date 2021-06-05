class UnknownControlRateAlgorithmError extends Error {
  name = 'UnknownControlRateAlgorithmError'

  constructor(algorithmLabel: string) {
    super(
      `The ControlRate algorithm with label = ${algorithmLabel} is unknown.`,
    )
  }
}

export default UnknownControlRateAlgorithmError
