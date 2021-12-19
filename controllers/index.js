const authController = require("./auth.controller")

const defaultHandler = (_req, res) => {
  res.sendSuccess("Pending")
}

module.exports = {
  defaultHandler,
  authController
}
