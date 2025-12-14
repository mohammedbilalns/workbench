import express from "express"
import { configDotenv } from "dotenv"
import connectDb from "./database/db.js"
import BookRoutes from "./routes/book-routes.js"
configDotenv()
const app = express()
connectDb()

app.use(express.json())
const PORT = process.env.PORT || 3000 

app.use('/api/books', BookRoutes)


app.use((err, req,res,next)=>{
	if(err){
		res.status(500).json({error:err.message})
	}
})
app.listen(PORT, ()=>{
	console.log(`Server running on ${PORT}`)
})



