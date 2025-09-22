import type { BunFile } from "bun";

 async function fileSystemOperations(){
	
	const file : BunFile = Bun.file('read.txt')
	console.log(file.size)
	console.log(file.type)
	console.log(file.name)
	console.log(file.lastModified)
	const extractContent = await file.text()
	console.log(extractContent)
	const arrayBuffer = await file.arrayBuffer()
	const unint8Array = await file.bytes()
	console.log(arrayBuffer, unint8Array)

	const content = "Hello world"
	await Bun.write('output.txt', content)
	console.log("File created successfully");
	await Bun.write('read_copy.txt', file)

	const isExists = await Bun.file('read_copy.txt').exists()
	console.log(isExists)

	await Bun.file('read_copy.txt').delete()
	
	
}


fileSystemOperations()
