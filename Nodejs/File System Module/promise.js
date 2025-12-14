const {spawn , fork ,exec ,execFile } = require("child_process")


const child = spawn('ls')

child.stdout.on('data', (data)=>{
	console.log(data.toString())
})
