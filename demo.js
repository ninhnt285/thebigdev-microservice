const app = require("./app")

const { authController, defaultHandler } = require("./controllers")
const { auth, hasRole } = authController

const API_PORT = process.env.PORT || 3100

// Testing routers
app.get("/", (_req, res) => { res.sendSuccess("OK") })
app.get("/test/auth", [auth, defaultHandler])
app.get("/test/admin", [hasRole("admin"), defaultHandler])
app.get("/test/parse", [(_req, res) => {
  res.sendSuccess(_req.user)
}])

app.listen(API_PORT, () => {
  console.log("Server is running on port", API_PORT)
})
