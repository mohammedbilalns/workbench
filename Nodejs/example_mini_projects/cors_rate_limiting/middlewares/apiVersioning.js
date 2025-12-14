
export const urlVersioning = (version)=> (req,res,next) =>{
	if(req.path.startsWith(`/api/${version}`)){
		next()
	}else{
		res.status(400).json({success:false, error:"API version is not supported"})
	}
}

export const headerVersioning = (version) => (req,res,next) => {
	if(req.get('Accept-Version') === version){
		next()
	}else{
		res.status(404).json({success:false, error:"Header version is not supported" })
	}
}
