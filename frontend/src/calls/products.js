import { httpClient } from '../helpers/httpClient'

export const makeProducts = async () => {
  const request = await httpClient().patch('/products/set-product')
  if (request.status === 200) {
    return request.data.success
  }
}

export const getProducts = async () => {
  const request = await httpClient().get('/products')
  if (request.status === 200) {
    return request.data.products
  } else {
    localStorage.clear()
    return []
  }
}

export const getAdminProducts = async () => {
  const request = await httpClient().get('/products/admin')
  if (request.status === 200) {
    return request.data.products
  } else {
    localStorage.clear()
    return []
  }
}

export const getProductId = async id => {
  const request = await httpClient().get(`/products/get-product/?id=${id}`)
  if (request.status === 200) {
    return request.data.product
  } else {
    localStorage.clear()
    return undefined
  }
}
