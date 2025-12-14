
export class APIError extends Error {
	constructor(message,statusCode){
		super(message)
		this.statusCode = statusCode
		this.name = "APIError"
	}

}


export const asyncHandler = (fn) => (req,res,next) =>{
	Promise.resolve(fn(req,res,next)).catch(next)
}

export const globalErrorHandler = (err, req,res,next) => {
	if(err instanceof APIError){
		res.status(err.statusCode).json({status:"Error", message:err.message})
	}

}

