const fs = require("fs")
const path = require("path")

const dataFolder = path.join(__dirname, "data"); 
if(!fs.existsSync(dataFolder)){
	fs.mkdirSync(dataFolder)
	console.log("Data folder is created")
}

const filePath = path.join(dataFolder, 'example.txt')
fs.writeFileSync(filePath, "Hello from node js ")
console.log("File creaed successfully ")

const readedContent = fs.readFileSync(filePath, "utf8")
console.log("File content ", readedContent)

fs.appendFileSync(filePath, '\n this is a new line')
console.log("Line added to file")

