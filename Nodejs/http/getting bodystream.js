const http = require("node:http")
const { json } = require("stream/consumers")

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')

    const bodyStream = []
    req
        .on('data', (chunk) => {
            bodyStream.push(chunk)
        })
        .on('end', (chunk) => {
            const bufferData = Buffer.concat(bodyStream)
            const requestBody = JSON.parse(bufferData)

            console.log(requestBody)
            res.end('All good')
            })

    res.end()
})



server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running  `)
})