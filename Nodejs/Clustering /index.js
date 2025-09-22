const cluster = require("node:cluster")
const http = require("http")
const { workerData } = require("node:worker_threads")
const numCpus = require("os").cpus().length


if(cluster.isPrimary){

	console.log(`Primary ${process.pid} is running` )

	for(let i=0; i< numCpus;i++){
		cluster.fork()
	}


	cluster.on('exit', (worker)=>{
		console.log(`Worker ${worker.process.pid} died`)
	})
}else{
	http.createServer((req, res)=>{
		res.writeHead(200)
		res.end("Hello world")
	}).listen(8000)


	console.log(`Worker  ${process.pid} started`)
}
