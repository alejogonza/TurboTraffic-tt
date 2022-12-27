import models from '../models'

export const modelPropagate = (req, res, next) => {
  try {
    req.context = {
      models
    }
    next()
  } catch (error) {
    return res.status(400).json({
      title: 'error',
      error
    })
  }
}
