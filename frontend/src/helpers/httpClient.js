import axios from 'axios'
const errorHandler = error => {
  if (error.response) {
    return {
      type: 'response',
      error: error.response
    }
  } else if (error.request) {
    return {
      type: 'request',
      error: error.request
    }
  } else {
    return {
      type: 'unknown',
      error: error.message
    }
  }
}

export const httpClient = () => {
  const API = axios.create({
    baseURL: process.env.REACT_APP_API_GATEWAY_URL,
    headers: {
      accept: 'application/json',
      user: localStorage.getItem('user')
    }
  })

  return {
    post: async (path, payload) => {
      try {
        return await API.post(path, payload)
      } catch (e) {
        return {
          data: errorHandler(e),
          error: true
        }
      }
    },
    get: async (path) => {
      try {
        return await API.get(path, {
          withCredentials: true
        })
      } catch (e) {
        return {
          data: errorHandler(e),
          error: true
        }
      }
    },
    patch: async (path, payload) => {
      try {
        return await API.patch(path, payload)
      } catch (e) {
        return {
          data: errorHandler(e),
          error: true
        }
      }
    },
    put: async (path, payload) => {
      try {
        return await API.put(path, payload)
      } catch (e) {
        return {
          data: errorHandler(e),
          error: true
        }
      }
    }
  }
}
