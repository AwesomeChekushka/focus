export class NotImplementedException extends Error {
  name = 'NotImplemented'
  constructor(moduleName?: string) {
    super(`The module ${moduleName} is not implemented`)
  }
}
