const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require("./Routes/userRoutes")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000

userRoutes(app)

app.get("/", (req, res) => res.send("olá mundo pelo express"))

app.listen(port, () => console.log("Api rodando com sucesso!"))

