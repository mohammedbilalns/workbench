const fs = require("fs")
const path  = require("path")

const asyncFilePath = path.join(__dirname, "async-example.txt")
fs.writeFile(asyncFilePath, "Hello asycn node js ", (err)=>{
	if(err) throw err 
	console.log("File created successfully")
})

fs.readFile(asyncFilePath,'utf8', (err,data)=>{
	if(err) throw err 
	console.log("Async file content", data)
	fs.appendFile(asyncFilePath, "\nAnother line added", (err)=>{
		if(err) throw err 
	console.log("Another line added ")
	})

	fs.readFile(asyncFilePath, "utf8", (err, data)=>{
		if(err) throw err 
		console.log("New content", data)
	})
})

fs.mkdir(path.join(__dirname, "test"), (err)=>{
	if(err) throw err
	console.log("New directory created successfully")
})

fs.rename("async-example.txt", "example.txt", (err)=>{
	if(err) throw err 
	console.log("renamed fie successfully")
})
