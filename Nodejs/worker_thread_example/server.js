import express from "express"
import {Worker} from "worker_threads"
const app = express()
const port =  3000 

app.get("/non-blocking", (req,res)=>{
	res.status(200).send("This is a non blocking page ")
})

app.get("/blocking", async (req,res)=>{
	const worker = new Worker("./worker.js")
	worker.on("message", (data)=>{
		res.status(200).send(`result is ${data}`)
	})	

	worker.on("error", (err)=>{
		res.status(500).send("An error occured")
	})
})


app.listen(port, ()=>{
	console.log('App is running')
})
