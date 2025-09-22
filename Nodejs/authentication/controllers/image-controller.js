import { allowedNodeEnvironmentFlags } from "node:process"
import { uploadToCloudinary } from "../helpers/cloudinaryHelper.js"
import Image from "../models/image.js"
import fs from "node:fs"
import cloudinary from "../config/cloudinary.js"

export const uploadImage = async(req,res) =>{
	if(!req.file){
		throw new Error("File is required")
	}	
	const {url, publicId} = await uploadToCloudinary(req.file.path)
	const image = await Image.create({url,publicId,uploadedBy:req.userInfo.userId})
	fs.unlinkSync(req.file.path)
	res.status(200).json({success:true, message:"Image uploaded successuflly", image})

}


export const fetchImagesController = async(req,res)=>{
	const page = parseInt(req.query.page) ||1 
	const limit = parseInt(req.query.limit) ||2 
	const skip = (page -1) * limit
	const sortBy = req.query.sortBy ||  'createdAt'
	const sortOrder  = req.query.sortOrder == 'asc' ? 1 :-1 
	const totalImages = await Image.countDocuments()
	const totalPages = Math.ceil(totalImages/limit)
	const sortObj = {}
	sortObj[sortBy]  = sortOrder

	const images = await Image.find({}).sort(sortObj).skip(skip).limit(limit)
	res.status(200).json({images, currentPage: page, totalPages: totalPages, totalImages})
}


export const deleteImageController = async(req,res) =>{
    const {id} = req.params.id;
	const userId = req.userInfo.userId;
	const image = await Image.findById(id)
	if(!image){
		throw new Error("Image not found")
	}
	
	if(image.uploadedBy.toString() !== userId){
		throw new Error("You are not authorized to delete the image")
	}
	await cloudinary.uploader.destroy(image.publicId)
	await Image.findByIdAndDelete(id)
	await Im
	res.json({message:"image deleted successfully"})

}
