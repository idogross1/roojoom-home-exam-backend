const express = require('express')
const bodyParser = require('body-parser')
const cors = require('express-cors')

const app = express()
app.use(
  cors({
    allowedOrigins: ['localhost:*', '127.0.0.1:*'],
  })
)

app.use(bodyParser.json())

const addBugRoutes = require('./routes/BugRoute')
addBugRoutes(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
