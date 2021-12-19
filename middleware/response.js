const extendedResponse = (_req, res, next) => {
  res.sendError = (error, code) => {
    return res.status(error.code || code || 400)
      .json({
        success: false,
        message: error.message,
        error: {
          statusCode: error.code || code || 400,
          message: error.message
        }
      })
  }

  res.sendErrorMessage = (message, code) => {
    return res.status(code || 400)
      .json({
        success: false,
        message: message,
        error: {
          statusCode: code || 400,
          message
        }
      })
  }

  res.sendSuccess = (data, code) => {
    return res.status(code || 200)
      .json({
        success: true,
        data
      })
  }

  next()
}

module.exports = extendedResponse
