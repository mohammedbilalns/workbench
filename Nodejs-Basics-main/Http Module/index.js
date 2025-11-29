const http = require('http');

const server = http.createServer((req, res) => {

  const bodyStream = [];

  req
    .on('data', (chunk) => {
      bodyStream.push(chunk);
    })
    .on('end', () => {
      const bufferData = Buffer.concat(bodyStream);
      const requestBody =  JSON.parse(bufferData);

      console.log('req.headers :>> ', req.headers);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(requestBody));
    });

});

server.listen(3000, () => {
  console.log('Server started on localhost:3000!');
})