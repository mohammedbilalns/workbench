import express from "express"
import { configDotenv } from "dotenv"
import authorRoutes from "./routes/authorRoutes.js"
import bookRoutes from "./routes/bookRoutes.js"
import promClient from "prom-client"

configDotenv()

const app = express()
app.use(express.json())

const register = new promClient.Registry()
promClient.collectDefaultMetrics({register})

const httpRequestsCounter = new promClient.Counter({
	name:"http_requests_total",
	help:"Total number of Http requests",
	labelNames: ["method", "route", "status"]

})
register.registerMetric(httpRequestsCounter)

const PORT = 3000

app.use((req,res,next)=>{
	res.on('finish', ()=>{
		httpRequestsCounter.inc({
			method:req.method,
			route:req.path,
			status:res.statusCode
		})
	})
	next()
})
// /metrics end point for prometheus 
app.get('/metrics', async(req,res)=>{
	res.set('Content-Type', register.contentType)
	res.end(await register.metrics())
})
app.use('/api/author', authorRoutes)
app.use('/api/book',bookRoutes )


app.listen(PORT, ()=>{
	console.log("Server is now running")
})
