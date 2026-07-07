const http = require("http")
const fs = require("node:fs")
const path = require("node:path")


const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, "views","index.html"), "utf-8",(err,data)=>{
            if(err) throw err 
            res.writeHead(200, {"Content-type": "text/html"})
            res.end(data)
        })
    }
    if(req.url === "/contact"){
        fs.readFile(path.join(__dirname, "views","contact.html"), "utf-8",(err,data)=>{
            if(err) throw err 
            res.writeHead(200, {"Content-type": "text/html"})
            res.end(data)
        })
    }
    
})




server.listen((3000), ()=>{
    console.log("Server Running ")
})