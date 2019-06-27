const express = require('express')
const server = express()

server.get('/', (request, response) => {
  response.send('<h1>It worked!</h1>')
})

server.all('/test', (request, response) => {
  response.send('<h1>Any Method</h1>')
})

const port = 3000
server.listen(port, () => {
  console.log(`App running on port ${port}`)
})
