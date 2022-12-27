/* eslint-disable no-throw-literal */

import { errorMessage } from './errorMessage'

const validateRequest = async ({ body, schema, lang, helpers }) => {
  try {
    await schema.validateAsync(body, {
      allowUnknown: true,
      abortEarly: false,
      convert: true
    })
    helpers?.forEach(fn => {
      const helperFn = fn(body, lang)
      if (helperFn?.helper) {
        throw helperFn
      }
    })
  } catch (err) {
    if (err?.helper) {
      throw {
        code: 400,
        message: err?.message,
        label: err?.label
      }
    }
    const formatMessage = errorMessage(err.details, lang)
    throw {
      code: 400,
      message: formatMessage.includes('undefined')
        ? err.details[0].message
        : formatMessage,
      label: err.details[0].path[0],
      details: err.details[0].message
    }
  }
}

module.exports = validateRequest
