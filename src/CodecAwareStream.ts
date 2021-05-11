import { defaultCodecLabel } from './constants'

export class CodecAwareStream extends MediaStream {
  private _codecLabel: string = defaultCodecLabel
  get codecLabel(): string {
    return this._codecLabel
  }

  set codecLabel(value: string) {
    this._codecLabel = value
  }
}
