import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import express from "express"
import ProductRoutes from "./routes/productRoutes.js";
import BookRoutes from "./routes/bookRoutes.js";
configDotenv()

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("mongodb connected successfully")).catch((err)=> console.log(err))

const app = express()
app.use(express.json())
app.use('/products', ProductRoutes)
app.use('/books', BookRoutes)

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: err.message });
});
app.listen(3000,()=>{
	console.log("Server running on port 3000")
})
