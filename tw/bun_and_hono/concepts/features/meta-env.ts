function importMetaAndEnv(){
	console.log(import.meta.url)

	console.log(import.meta.main) // check the file is the main module 
	console.log(process.env.NODE_ENV)
	console.log(Bun.env.NODE_ENV)

}

importMetaAndEnv()

