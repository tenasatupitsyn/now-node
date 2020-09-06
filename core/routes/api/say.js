const { Router } = require('express')
const router = Router()

router.get('/', (request, response) => {
  response.json({ text: request.query.text || 'Did you say something?' })
})

module.exports = router