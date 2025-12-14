import express from "express"
import { configDotenv } from "dotenv"
import configCors from "./config/corsConfig.js"
import { addTimeStamp, requestLogger } from "./middlewares/customMiddleware.js"
import { globalErrorHandler } from "./middlewares/errorHandler.js"
import { urlVersioning } from "./middlewares/apiVersioning.js"
import createBasicRateLimiter from "./middlewares/rateLimiting.js"
import itemRoutes from "./routes/items-routes.js"
configDotenv()

const PORT = process.env.PORT || 3000 

const app = express()

app.use(requestLogger)
app.use(addTimeStamp)
app.use(configCors())
app.use(createBasicRateLimiter(2, 15*60*1000))
app.use(express.json())
app.use(urlVersioning('v1'))

app.use('/api/v1', itemRoutes)
app.use(globalErrorHandler)
app.listen(PORT, ()=>{
	console.log("Server running in port ", PORT)
})
