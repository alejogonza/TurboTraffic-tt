const HttpResponse = {
  OK: {
    STATUS: 200,
    MESSAGE: 'OK'
  },
  CREATED: {
    STATUS: 201,
    MESSAGE: 'Created'
  },
  NO_CONTENT: {
    STATUS: 204,
    MESSAGE: 'No Content'
  },
  PARTIAL_CONTENT: {
    STATUS: 206,
    MESSAGE: 'Partial Content'
  },
  BAD_REQUEST: {
    STATUS: 400,
    MESSAGE: 'Bad Request'
  },
  UNAUTHORIZED: {
    STATUS: 401,
    MESSAGE: 'Unauthorized'
  },
  NOT_FOUND: {
    STATUS: 404,
    MESSAGE: 'Not Found'
  },
  INTERNAL_SERVER_ERROR: {
    STATUS: 500,
    MESSAGE: 'Internal Server Error'
  }
}

export default HttpResponse
