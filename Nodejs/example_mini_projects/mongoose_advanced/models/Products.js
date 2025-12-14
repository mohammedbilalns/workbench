import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
	name:String, 
	category:String,
	price:Number,
	inStock : Boolean,
	tags: [String]
})


export default mongoose.model('Product', ProductSchema)
