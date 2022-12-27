import routerx from 'express-promise-router'
import adminCheckout from '../controllers/admin/route'
import staffCheckout from '../controllers/staff/route'
import bussinessCheckout from '../controllers/bussiness/route'
import healthCheckout from '../controllers/healthCheck/route'

const router = routerx()

router.use('/admin', adminCheckout)
router.use('/staff', staffCheckout)
router.use('/bussiness', bussinessCheckout)
router.use('/healthcheck', healthCheckout)

export default router
