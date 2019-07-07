const http = require('http')

http.get('http://localhost:3000', {
    agente: false,
    path: '/sse-server'
}, (response) => {
    response.on('data', data => {
        console.log(data.toString())
    })
})