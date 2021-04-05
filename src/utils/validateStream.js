import {
  __,
  always,
  anyPass,
  complement,
  compose,
  cond,
  F,
  gt,
  is,
  lte,
  prop,
  T,
} from 'ramda'
import { IllegalArgument } from './error'
import Result from 'folktale/result/result'

const notANumber = complement(is(Number))
const lessThanOrEqual0 = lte(__, 0.0)
const greaterThan1 = gt(__, 1.0)

const connectionQualityInvalidErrorMessage =
  'The connection quality parameter has to be a number, which is greater than 0.0 and less than or equal 1.0'
const connectionQualityInvalid = compose(
  anyPass([notANumber, lessThanOrEqual0, greaterThan1]),
  prop('connectionQuality'),
)

// TODO implement video codec configuration validation
const videoCodecConfigurationInvalidErrorMessage =
  'The video codec configuration is invalid'
const videoCodecConfigurationInvalid = F

// TODO implement video codec configuration validation
const videoStreamInvalidErrorMessage = 'The video stream is invalid'
const videoStreamInvalid = F

export const validateStream = cond([
  [
    connectionQualityInvalid,
    always(
      Result.Error(IllegalArgument.of(connectionQualityInvalidErrorMessage)),
    ),
  ],
  [
    videoCodecConfigurationInvalid,
    always(
      Result.Error(
        IllegalArgument.of(videoCodecConfigurationInvalidErrorMessage),
      ),
    ),
  ],
  [
    videoStreamInvalid,
    always(Result.Error(IllegalArgument.of(videoStreamInvalidErrorMessage))),
  ],
  [T, Result.Ok],
])
