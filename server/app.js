const express = require('express')
const app = express()
const port = 3000
require("dotenv").config()
const authRouter = require('./routes/authentication')
const authService = require('./services/authentication')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


app.use("/auth", authRouter)
app.use(cookieParser("bob"))
// app.use(authService)


//use this to test cookie validation, have the secret be 'carlos'
//curl localhost:3000 -v --cookie "token=s:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNhcmxvcyIsImlhdCI6MTY5NzU0MTgyM30.1IBsERfnTzwjkR3jTU8qMp8LA0H5VBGlauG3fM1ynyg"
app.get('/', (req, res) => {
  console.log(req.cookies)
  const reqToken = req?.signedCookies?.token
  if(!reqToken) res.sendStatus(403)
  console.log(req.signedCookies.token)
  res.cookie("token", res?.signedCookies?.token)
  res.send(`Hello ${process.env.CARLOS}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})