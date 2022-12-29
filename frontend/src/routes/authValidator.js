import { Outlet, Navigate } from 'react-router-dom'
import { useStoreContext } from '../context/ContextProvider'

export const ProtectedAdminRoutes = () => {
  const { contextStore } = useStoreContext()
  const isAuth = contextStore.user === 'fernando' ? true : false
  return isAuth ? <Outlet /> : <Navigate to='/access/admin' />
}

export const ProtectedProductRoutes = () => {
  const { contextStore } = useStoreContext()
  const isAuth = contextStore.user ? true : false
  return isAuth ? <Outlet /> : <Navigate to='/register' />
}

export const ProtectedRegisterRoutes = () => {
  const { contextStore } = useStoreContext()
  const isAuth = contextStore.user ? true : false
  return isAuth ? <Navigate to='/home' /> : <Outlet />
}
