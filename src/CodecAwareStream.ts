type Constructor<T = unknown> = new (...args: any[]) => T

const CodecAware = <TBase extends Constructor<MediaStream>>(Base: TBase) => {
  return class CodecAwareStream extends Base {
    _codecLabel = 'default'

    get codecLabel(): string {
      return this._codecLabel
    }

    set codecLabel(value: string) {
      this._codecLabel = value
    }
  }
}

export const CodecAwareStream = CodecAware(MediaStream)
