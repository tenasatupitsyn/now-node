const express = require('express')
const app = express()

const api = require('./routes/api')

app.use('/api', api)

app.use((request, response, next) => {
  response.status(404)
  next(new Error('Not found'))
})

app.use((error, request, response, next) => {
  response.status(response.statusCode !== 200 ? response.statusCode : 500)
  response.json({ message: error.message })
})

app.listen(process.env.PORT || 1010)