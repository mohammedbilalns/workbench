import User from "../models/user.js"
import asyncHandler from "../utils/asyncHandler.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = asyncHandler( async(req,res)=>{
	const {username, email,role,password} = req.body
	const existingUser = await User.findOne({$or:[{username},{email}]})
	if(existingUser){
		return res.json(400).json({success:false, message:"User with the username or email already exists"})
	}
	const hashedPassword = await bcrypt.hash(password,10)
	
	await User.create({username, email, role, password:hashedPassword})

	return res.status(200).json({success:true, message:"Registered successfully"})

})

export const loginUser = async(req,res) =>{

	const {email, password} = req.body
	const user = await User.findOne({email})
	console.log(user)
	if(!user){
		return res.status(400).json({success:false, message:"User not found"})
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password)
	console.log(isPasswordMatch)
	if(!isPasswordMatch){
		return res.status(400).json({success:false, message:"Invalid password"})
	}

	const accesstoken  = jwt.sign({userId:user._id, username:user.username, role:user.role}, process.env.JWT_SECRET, {expiresIn:'15m'})
	
	res.status(200).json({
		success:false , 
		message:"User loginned successfully",
		accesstoken
	})

}
