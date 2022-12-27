import routerx from 'express-promise-router'
import createController from './create/createController'
import { userVerify } from '../../middlewares/user'

const router = routerx()
router.post('/create-user', createController.CreateUser)
router.put('/create-review', userVerify, createController.CreateReview)

export default router
