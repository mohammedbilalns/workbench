const http = require('http');

const server = http.createServer((req, res) => {
    
    http.get("http://jsonplaceholder.typicode.com/todos/1", (res)=>{
        
        console.log(res.statusCode)
        let responseBody 

        res.on("data", (incomingData)=>{
            responseBody += incomingData
        })

        res.on('end', ()=>{
            console.log(responseBody)
        })
    })
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});