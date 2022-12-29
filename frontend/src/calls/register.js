import { httpClient } from '../helpers/httpClient'

export const register = async name => {
  const request = await httpClient().post('/user/create-user', {
    name
  })
  if (request.status === 200) {
    localStorage.setItem('user', name)
    return request.data
  } else {
    const { data } = request
    if (data.error?.data?.message === 'user exist') {
      localStorage.setItem('user', name)
    } else {
      localStorage.clear()
      return []
    }
  }
}
