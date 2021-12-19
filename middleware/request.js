const jwt = require("jsonwebtoken")

const extendedRequest = (_req, res, next) => {
  try {
    let token = _req.body.token || _req.query.token
    if (_req.headers && _req.headers.authorization && _req.headers.authorization.split(' ')[0] === "Bearer") {
      token = _req.headers.authorization.split(' ')[1]
    }
    
    if (token) {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY)
      _req.user = decoded
    }
  } catch (err) {
    console.log(err)
  } finally {
    next()
  }
}

module.exports = extendedRequest
