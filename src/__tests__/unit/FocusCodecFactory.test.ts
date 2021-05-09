import { FocusCodecFactory } from '../../FocusCodecFactory'

describe('FocusCodecFactory tests', () => {
  test('getCodec smoke test', () => {
    // given
    const codecFactory = new FocusCodecFactory()
    // when
    const codec = codecFactory.getCodec()
    // then
    expect(codec).toBeDefined()
  })
  test('getCodecForStream smoke test', () => {
    // given
    const codecFactory = new FocusCodecFactory()
    // when
    const codec = codecFactory.getCodecForStream()
    // then
    expect(codec).toBeDefined()
  })
})
