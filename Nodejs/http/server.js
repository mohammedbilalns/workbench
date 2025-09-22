const http = require("http")

const server = http.createServer((req,res)=>{
	const url = req.url
	if(url ==  "/"){
		res.writeHead(200, {"content-type":"text/plain"})
		res.end("Home page")
	}else if(url == "/products"){
		res.writeHead(200, {"content-type":"text/plain"})
		res.end("Products")
	}else{
		res.writeHead(404, {"content-type":"text/plain"})
		res.end("Not found")
	}
})
const port = 3000 
server.listen(port, ()=>{
	console.log("Server running ")

})
