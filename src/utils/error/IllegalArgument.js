export class IllegalArgument extends Error {
  static of(message) {
    return new IllegalArgument(message)
  }

  get name() {
    return 'IllegalArgument'
  }
}
