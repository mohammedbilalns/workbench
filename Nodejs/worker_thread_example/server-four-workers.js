import express from "express"
import {Worker} from "worker_threads"
import { cpus } from "os"
const app = express()
const port =  3000 
const THREAD_COUNT = cpus().length/2 

function createWorker(){

	console.log("creating worker")

	return new Promise((resolve, reject)=>{
		const worker = new Worker("./four-workers.js", {
			workerData: {
				thread_count: THREAD_COUNT
			}

		})


		worker.on("message", (data)=>{
		resolve(data)
	})	

	worker.on("error", (err)=>{
		reject(500).send(err.message)
	})
	})
}

app.get("/non-blocking", (req,res)=>{
	res.status(200).send("This is a non blocking page ")
})

app.get("/blocking", async (req,res)=>{
	const workerPromises = []
	for(let i=0 ; i< THREAD_COUNT; i++){
		workerPromises.push(createWorker())
	}

	const thread_results = await Promise.all(workerPromises)
	const total = thread_results.reduce((acc, result)=>{
		return acc + result
	},0)
	res.status(200).send(`result is ${total}`)
})


app.listen(port, ()=>{
	console.log('App is running')
})
