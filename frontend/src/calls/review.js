import { httpClient } from '../helpers/httpClient'

export const createReview = async (id, review) => {
  const request = await httpClient().put(
    `/user/create-review/?id=${id}&review=${review}`
  )
  if (request.status === 200) {
    return request.data.product
  } else {
    localStorage.clear()
    return []
  }
}
