const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url =="/home"){
        res.end("home")
    }
})


server.listen(3000, ()=>{
    console.log('Server running...')
})