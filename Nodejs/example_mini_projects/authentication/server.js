import express from "express"
import { configDotenv } from "dotenv";
import connectDb from "./db/db.js"
import authRoutes from "./routes/auth-routes.js"
import homeRoutes from "./routes/home-routes.js"
import adinRoutes from "./routes/admin-routes.js"
import imageRoutes from "./routes/image-routes.js"
configDotenv()
connectDb()
const app = express()
const PORT = process.env.PORT || 3000 

app.use(express.json())
app.use("/api/auth", authRoutes )
app.use('/api/home', homeRoutes)
app.use("/api/admin", adinRoutes)
app.use("/api/image", imageRoutes)
app.use((err, req,res,next)=>{
	if(err){
		res.status(500).json({error:err.message})
	}
})
 
app.listen(PORT, ()=>{
	console.log("Server running on port ", PORT)
})
