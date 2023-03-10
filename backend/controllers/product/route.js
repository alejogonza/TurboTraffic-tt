import routerx from 'express-promise-router'
import productController from './get/productController'
import setProductController from './set/setProductController'
import { userVerify, adminVerify } from '../../middlewares/user'
const router = routerx()

router.get('/', userVerify, productController.GetProduct)
router.get('/get-product', userVerify, productController.GetProductId)
router.patch('/set-product', setProductController.SetProducts)
router.get('/admin', adminVerify, productController.GetAdminProduct)


export default router
