class NotImplementedError extends Error {
  name = 'NotImplemented'

  constructor(moduleName: string) {
    super(`The module ${moduleName} not implemented.`)
  }
}

export default NotImplementedError
