export const userVerify = async (req, res, next) => {
  try {
    const user = req.headers.user
    if (!user) {
      return res.status(401).json({
        auth: false,
        errType: 'headers',
        protectedRoute: true,
        message: 'user header not found'
      })
    }
    const userValidator = await req.context.models.Users.findOne({
      where: { name: user }
    })
    if (!userValidator) {
      return res.status(401).json({
        auth: false,
        errType: 'no user',
        protectedRoute: true,
        message: 'user not found'
      })
    }
    next()
  } catch (error) {
    return res.status(400).json({
      title: 'error',
      error
    })
  }
}

export const adminVerify = async (req, res, next) => {
  try {
    const user = req.headers.user
    if (!user) {
      return res.status(401).json({
        auth: false,
        errType: 'headers',
        protectedRoute: true,
        message: 'user header not found'
      })
    }
    const userValidator = await req.context.models.Users.findOne({
      where: { name: user }
    })
    if (!userValidator) {
      return res.status(401).json({
        auth: false,
        errType: 'no user',
        protectedRoute: true,
        message: 'user not found'
      })
    }
    if (userValidator.name !== 'fernando') {
      return res.status(401).json({
        auth: false,
        errType: 'no authorizated',
        protectedRoute: true,
        message: 'user not authorizated'
      })
    }
    next()
  } catch (error) {
    return res.status(400).json({
      title: 'error',
      error
    })
  }
}
