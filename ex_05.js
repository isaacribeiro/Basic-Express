const express = require('express')
const server = express()
const router = require('./ex_05_route')

server.use('/api', router)

const port = 3000
server.listen(port, () => {
  console.log(`App running on port ${port}`)
})
