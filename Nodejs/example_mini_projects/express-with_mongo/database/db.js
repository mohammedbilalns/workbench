import mongoose, { mongo } from "mongoose";

const connectDb = async()=>{
	try{
		await mongoose.connect(process.env.MONGODB_URI)
		console.log("Mongodb connnected successfully")
	}catch(err){
		console.error(`Mongodb connection failed`, error)
		process.exit(1)
	}
}


export default connectDb
