const { Router } = require('express')
const router = Router()

const say = require('./say.js')

router.get('/', (request, response) => {
  response.json([
    'GET     /api/say?text='
  ])
})

router.use('/say', say)

module.exports = router