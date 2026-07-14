import { IncomingMessage, ServerResponse } from "node:http";
import http from "node:http";


const server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
    
    http.get("http://jsonplaceholder.typicode.com/todos/1", (res)=>{
        
        console.log(res.statusCode)
        let responseBody :string = ""

        res.on("data", (incomingData : Buffer)=>{
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
