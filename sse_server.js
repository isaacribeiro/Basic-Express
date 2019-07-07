const express = require('express')
const app = express()

app.get('/sse-server', (request, response) => {
    response.status(200).set({
        "connection": "keep-alive",
        "cache-control": "no-cache",
        "content-Type": "text/event-stream"
    });
    const data = {
        message: "Hello World!"
    }
    setInterval(() => {
        data.timestamp = Date.now()
        response.write(`data: Hello World!\n\n`)
    }, 5000)
});

app.listen(3000, () => console.log('App running on Port 3000'));