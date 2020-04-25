const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const { connectDB, getDB, closeDB } = require('./clientConnection.js')

connectDB(() => {
  console.log('client connected')
})


app.use(cors())
app.use(bodyParser.json())

app.use('/api', require('./routes'));
app.listen(5000)
console.log('Server is listening on port 5000')
