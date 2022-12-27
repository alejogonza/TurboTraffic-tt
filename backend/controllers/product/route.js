import routerx from 'express-promise-router'
import productController from './get/productController'
import { userVerify, adminVerify } from '../../middlewares/user'
const router = routerx()

router.get('/', userVerify, productController.GetProduct)
router.get('/admin', adminVerify, productController.GetAdminProduct)


export default router
