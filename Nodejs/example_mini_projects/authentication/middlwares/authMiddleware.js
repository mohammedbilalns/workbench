import jwt from "jsonwebtoken"

export const authMiddleWare = (req,res,next)=>{
	const authHeader = req.headers["authorization"]
	const token  = authHeader && authHeader.split(" ")[1]
	
	if(!token){
		return res.status(400).json({message:"Please login to continue"})
	}
	
	try{
		const decodedInfo = jwt.verify(token, process.env.JWT_SECRET)
		req.userInfo = decodedInfo
		next()
	}catch(err){
		console.log("Failed to decode token", err)
		res.status(400).json({message:err.message})
	}

}
