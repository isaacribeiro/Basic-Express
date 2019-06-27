const express = require('express')
const server = express()

server.get('/', (request, response, next) => {
  console.log('Start')
  next() // Chain of Responsibility
  console.log('End')
})

server.get('/', (request, response, next) => {
  console.log('Response')
  response.send('<h1>OK</h1>')
  next()
})


server.get('/', (request, response) => {
  console.log('Response 2')
})

const port = 3000
server.listen(port, () => { console.log(`App running on port ${port}`) })
