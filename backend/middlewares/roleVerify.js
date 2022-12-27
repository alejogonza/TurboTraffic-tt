import jwt from 'jsonwebtoken'
import constants from '../libs/constants'
import { validateString } from '../helpers/functions'
import { jsonLang } from '../libs/errorMessage'
// models
import Staffs from '../models/Staffs'
import Bussiness from '../models/Bussiness'

const StaffRole = async (req, res, next) => {
  try {
    const lang = req.headers.lang
    const token = req.headers.token
    if (!validateString(lang, ['en', 'es'])) {
      return res.status(401).json({
        auth: false,
        errType: 'lang',
        message: 'lang not found'
      })
    }
    if (!token) {
      return res.status(401).json({
        auth: false,
        errType: 'token',
        message: jsonLang('tokenNotFound', lang)
      })
    }
    req.userId = jwt.verify(token, constants.JWT).id
    const reqRole = await Staffs.findById(req.userId)
    if (!validateString(reqRole.role, ['admin', 'support'])) {
      return res.status(401).json({
        auth: false,
        error: jsonLang('invalidRole', lang)
      })
    }
    req.role = reqRole.role
    next()
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        title: 'error',
        errType: 'query',
        message: jsonLang('invalidUser', req.headers.lang)
      })
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({
        title: 'error',
        errType: 'token',
        message: jsonLang('invalidToken', req.headers.lang)
      })
    }
    return res.status(400).json({
      title: 'error',
      errType: 'query'
    })
  }
}

const AdminRole = async (req, res, next) => {
  try {
    const lang = req.headers.lang
    const token = req.headers.token
    if (!validateString(lang, ['en', 'es'])) {
      return res.status(401).json({
        auth: false,
        errType: 'lang',
        message: 'lang not found'
      })
    }
    if (!token) {
      return res.status(401).json({
        auth: false,
        errType: 'token',
        message: jsonLang('tokenNotFound', lang)
      })
    }
    req.userId = jwt.verify(token, constants.JWT).id
    const reqRole = await Staffs.findById(req.userId)
    if (!validateString(reqRole.role, ['admin'])) {
      return res.status(401).json({
        auth: false,
        error: jsonLang('invalidRole', lang)
      })
    }
    req.role = reqRole.role
    next()
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        title: 'error',
        errType: 'query',
        message: jsonLang('invalidUser', req.headers.lang)
      })
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({
        title: 'error',
        errType: 'token',
        message: jsonLang('invalidToken', req.headers.lang)
      })
    }
    return res.status(400).json({
      title: 'error',
      errType: 'query'
    })
  }
}

const BussinessRole = async (req, res, next) => {
  try {
    const lang = req.headers.lang
    const token = req.headers.token
    const bussinessId = req.headers.bussinessid

    if (!validateString(lang, ['en', 'es'])) {
      return res.status(401).json({
        auth: false,
        errType: 'lang',
        message: 'lang not found'
      })
    }
    if (!token) {
      return res.status(401).json({
        auth: false,
        errType: 'token',
        message: jsonLang('tokenNotFound', lang)
      })
    }
    if (!bussinessId) {
      return res.status(401).json({
        auth: false,
        errType: 'bussinessId',
        message: jsonLang('bussinessIdNotFound', lang)
      })
    }
    req.userId = jwt.verify(token, constants.JWT).id
    const bussiness = await Bussiness.findById(bussinessId).select(
      'owner employees'
    )

    if (bussiness?.owner.length === 0) {
      return res.status(401).json({
        auth: false,
        error: jsonLang('noOwner', lang)
      })
    }

    const { owner } = await bussiness.populate({
      path: 'owner',
      model: 'Owners',
      match: { _id: req.userId }
    })
    const employees =
      bussiness?.employees.length > 0
        ? await bussiness.populate({
          path: 'employees',
          model: 'Employees',
          match: { _id: req.userId }
        })
        : null

    const userRole = owner[0]?.role ?? employees?.employees[0]?.role

    if (userRole) {
      if (!validateString(userRole, ['owner', 'support'])) {
        return res.status(401).json({
          auth: false,
          error: jsonLang('invalidRole', lang)
        })
      }
      req.role = userRole
    } else {
      const reqRole = await Staffs.findById(req.userId)
      if (!validateString(reqRole.role, ['admin', 'support'])) {
        return res.status(401).json({
          auth: false,
          error: jsonLang('invalidRole', lang)
        })
      }
      req.role = reqRole.role
    }

    next()
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      return res.status(400).json({
        title: 'error',
        errType: 'query',
        message: jsonLang('invalidBussinessId', req.headers.lang)
      })
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({
        title: 'error',
        errType: 'token',
        message: jsonLang('invalidToken', req.headers.lang)
      })
    }
    return res.status(400).json({
      title: 'error',
      errType: 'query'
    })
  }
}

const OwnerRole = async (req, res, next) => {
  try {
    const lang = req.headers.lang
    const token = req.headers.token
    const bussinessId = req.headers.bussinessid
    if (!validateString(lang, ['en', 'es'])) {
      return res.status(401).json({
        auth: false,
        errType: 'lang',
        message: 'lang not found'
      })
    }
    if (!token) {
      return res.status(401).json({
        auth: false,
        errType: 'token',
        message: jsonLang('tokenNotFound', lang)
      })
    }
    if (!bussinessId) {
      return res.status(401).json({
        auth: false,
        errType: 'bussinessId',
        message: jsonLang('bussinessIdNotFound', lang)
      })
    }
    req.userId = jwt.verify(token, constants.JWT).id
    const bussiness = await Bussiness.findById(bussinessId).select('owner')

    if (bussiness?.owner.length === 0) {
      return res.status(401).json({
        auth: false,
        error: jsonLang('noOwner', lang)
      })
    }

    const { owner } = await bussiness.populate({
      path: 'owner',
      model: 'Owners',
      match: { _id: req.userId }
    })
    const userRole = owner[0]?.role
    if (userRole) {
      if (!validateString(userRole, ['owner'])) {
        return res.status(401).json({
          auth: false,
          error: jsonLang('invalidRole', lang)
        })
      }
      req.role = userRole
    } else {
      const reqRole = await Staffs.findById(req.userId)
      if (!validateString(reqRole.role, ['admin', 'support'])) {
        return res.status(401).json({
          auth: false,
          error: jsonLang('invalidRole', lang)
        })
      }
      req.role = reqRole.role
    }

    next()
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      return res.status(400).json({
        title: 'error',
        errType: 'query',
        message: jsonLang('bussinessIdNotFound', req.headers.lang)
      })
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({
        title: 'error',
        errType: 'token',
        message: jsonLang('invalidToken', req.headers.lang)
      })
    }
    return res.status(400).json({
      title: 'error',
      errType: 'query'
    })
  }
}
// const UserRole = async (req, res, next) => {
//   const token = req.headers.token
//   if (!token) {
//     return res.status(401).json({
//       auth: false,
//       errType: 'token',
//       message: 'token not found'
//     })
//   }

//   try {
//     req.userId = jwt.verify(token, constants.JWT).id
//     const user = await User.findById(req.userId)
//     if (!user || user.role !== 'user') {
//       return res.status(401).json({
//         auth: false,
//         errType: 'token',
//         message: 'user not found'
//       })
//     }
//   } catch (error) {
//     const { name } = error
//     if (name === 'CastError') {
//       return res.status(400).json({
//         title: 'error',
//         errType: 'query',
//         message: 'invalid query - invalid id'
//       })
//     }
//     if (name === 'JsonWebTokenError') {
//       return res.status(400).json({
//         title: 'error',
//         errType: 'token',
//         message: 'invalid token'
//       })
//     }
//   }
//   next()
// }

// const GenericRole = async (req, res, next) => {
//   try {
//     const token = req.headers.token
//     if (!token) {
//       return res.status(401).json({
//         auth: false,
//         errType: 'token',
//         message: 'token not found'
//       })
//     }
//     req.userId = jwt.verify(token, constants.JWT).id
//     const existUser = await User.findById(req.userId)
//     if (!existUser) {
//       return res.status(401).json({
//         auth: false,
//         error: 'invalid user'
//       })
//     }
//     next()
//   } catch (error) {
//     if (error.name === 'CastError') {
//       return res.status(400).json({
//         title: 'error',
//         errType: 'query',
//         message: 'invalid query - invalid id'
//       })
//     }
//     if (error.name === 'JsonWebTokenError') {
//       return res.status(400).json({
//         title: 'error',
//         errType: 'token',
//         message: 'invalid token'
//       })
//     }
//     return res.status(400).json({
//       title: 'error',
//       errType: 'query'
//     })
//   }
// }

export { StaffRole, AdminRole, BussinessRole, OwnerRole }
