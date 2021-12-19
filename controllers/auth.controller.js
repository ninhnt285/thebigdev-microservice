const auth = async (_req, res, next) => {
  if (!_req.user) {
    return res.sendErrorMessage("Invalid Token", 401)
  }

  return next()
}

const hasRole = (role) => {
  return async (_req, res, next) => {
    if (_req.user && _req.user.role === role) {
      return next()
    }

    return res.sendErrorMessage("Unauthorized")
  }
}

module.exports = {
  auth,
  hasRole
}
