const express = require('express')
const server = express()

server.use('/api', (request, response, next) => {
  console.log('Start')
  next() // Chain of Responsibility
  console.log('End')
})

server.use('/api', (request, response, next) => {
  console.log('Response')
  response.send('<h1>OK</h1>')
  next()
})


server.use('/api', (request, response) => {
  console.log('Response 2')
})

const port = 3000
server.listen(port, () => { console.log(`App running on port ${port}`) })
