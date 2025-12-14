import mongoose from "mongoose";
const connectDb = async ()=>{
	try{
		await mongoose.connect(process.env.MONGODB_URI)
		console.log("Mongodb Connected successfully")
	}catch(err){
		console.log("MOngodb connection failed" , err)
	}
}


export default connectDb
