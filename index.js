const controllers = require("./controllers")
const middleware = require("./middleware")

exports = module.exports = require("./app")

exports.controllers = controllers
exports.middleware = middleware