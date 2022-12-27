import routerx from 'express-promise-router'
import productCheckout from '../controllers/product/route'
import userCheckout from '../controllers/user/route'


const router = routerx()

router.use('/products', productCheckout)
router.use('/user', userCheckout)


export default router
