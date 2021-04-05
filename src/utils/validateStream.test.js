import Result from 'folktale/result/result'
import { IllegalArgument } from './error'
import { validateStream } from './validateStream'

describe('Connection quality validation function tests', () => {
  test('Connection quality is valid', () => {
    // given
    const stream = { connectionQuality: 0.7 }
    // when
    const result = validateStream(stream)
    // then
    expect(result).toStrictEqual(Result.Ok(stream))
  })
  test('Connection quality is less than zero', () => {
    // given
    const errorMessage =
      'The connection quality parameter has to be a number, which is greater than 0.0 and less than or equal 1.0'
    const stream = { connectionQuality: -1.0 }
    // when
    const result = validateStream(stream)
    // then
    expect(result).toStrictEqual(
      Result.Error(new IllegalArgument(errorMessage)),
    )
  })
  test('Connection quality is more than one', () => {
    // given
    const errorMessage =
      'The connection quality parameter has to be a number, which is greater than 0.0 and less than or equal 1.0'
    const stream = { connectionQuality: 2.0 }
    // when
    const result = validateStream(stream)
    // then
    expect(result).toStrictEqual(
      Result.Error(new IllegalArgument(errorMessage)),
    )
  })
  test('Connection quality is not a number', () => {
    // given
    const errorMessage =
      'The connection quality parameter has to be a number, which is greater than 0.0 and less than or equal 1.0'
    const stream = { connectionQuality: 'wtf' }
    // when
    const result = validateStream(stream)
    // then
    expect(result).toStrictEqual(
      Result.Error(new IllegalArgument(errorMessage)),
    )
  })
})

describe('Video codec configuration validation function tests', () => {
  test('Video codec configuration is valid', () => {
    // given
    const stream = { connectionQuality: 0.7 }
    // when
    const result = validateStream(stream)
    // then
    expect(result).toStrictEqual(Result.Ok(stream))
  })
})

describe('Video stream validation function tests', () => {
  test('Video stream is valid', () => {
    // given
    const stream = { connectionQuality: 0.7 }
    // when
    const result = validateStream(stream)
    // then
    expect(result).toStrictEqual(Result.Ok(stream))
  })
})
