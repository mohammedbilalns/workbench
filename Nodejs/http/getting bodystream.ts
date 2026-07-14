import http from "node:http";

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')

    const bodyStream : Buffer[] = []
    req
        .on('data', (chunk) => {
            bodyStream.push(chunk)
        })
        .on('end', () => {
            const bufferData = Buffer.concat(bodyStream)
            const requestBody = JSON.parse(bufferData.toString())

            console.log(requestBody)
            res.end('All good')
            })

    res.end()
})



server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running  `)
})
