import multer from "multer"
import path from "node:path"


const storage  = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,"uploads/")
	},
	filename: function(req,file,cb){
		cb(null,
			file.filename + "-" + Date.now()+ path.extname(file.originalname)
		)
	}
})


const checkFileFilter = (req,file,cb)=>{
	if(file.mimetype.startsWith('image')){
		cb(null,true)
	}else {
		cb(new Error("Not an image! Please upload only images"))
	}
	
}

const uploadMiddleware =  multer({
	storage: storage,
	fileFilter:checkFileFilter,
	limits: {
		fileSize: 5 * 1024 * 1024
	}
})


export default uploadMiddleware
