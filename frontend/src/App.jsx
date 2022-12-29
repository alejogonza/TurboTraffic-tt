import {
  Router,
  ProtectedRegisterRoutes,
  ProtectedProductRoutes,
  ProtectedAdminRoutes
} from './routes'
import { Home, Register, Admin, Product } from './pages/index'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { makeProducts } from './calls'

function App () {
  useEffect(() => {
    ;(async function () {
      await makeProducts()
    })()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRegisterRoutes />}>
          <Route path={Router.register} element={<Register />} />
        </Route>
        <Route element={<ProtectedProductRoutes />}>
          <Route path={Router.home} element={<Home />} />
          <Route path={Router.productId} element={<Product />} />
        </Route>
        <Route element={<ProtectedAdminRoutes />}>
          <Route path={Router.admin} element={<Admin />} />
        </Route>
        <Route path={Router.default} element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
