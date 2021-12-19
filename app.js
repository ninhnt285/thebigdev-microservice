const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const { responseMiddleware, requestMiddleware } = require("./middleware")

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(requestMiddleware)
app.use(responseMiddleware)

// CORS Configures
const ACCEPT_CLIENTS = process.env.ACCEPT_CLIENTS || "http://localhost:3000"
const corsOptions = {
  origin: ACCEPT_CLIENTS.split(" "),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Access-Control-Allow-Headers", "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers", "Authorization"]
}
app.use(cors(corsOptions))

module.exports = app
