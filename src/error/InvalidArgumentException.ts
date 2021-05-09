export class InvalidArgumentException extends Error {
  name = 'InvalidArgument'
  constructor(argumentName: string, value: unknown) {
    super(`The argument ${argumentName} has an invalid value: ${value}`)
  }
}
