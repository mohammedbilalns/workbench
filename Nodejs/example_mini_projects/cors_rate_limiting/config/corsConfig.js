import cors from "cors"

const configCors = () => {
	return cors({
		origin: (origin, callback)=>{
			const allowedOrigins = [
				"http://localhost:3000",
				"https://localhost:3000"
			]

			if(!origin || allowedOrigins.indexOf(origin) !== -1){
				callback(null, true)
			}else{
				callback(new Error("Not allowd by cors"))
			}
		
		},
		methods: ["GET","POST", "PUT","DELETE"],
		allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'],
		exposedHeaders: ['X-Total-Count', 'Content-Range'],
		credentials: true, // enable support for cookies 
		preflightContinue: false ,
		maxAge: 600, // caches the preflitght responses for 10 mins 
		optionsSuccessStatus: 204 // response code for succesful optins request

	})
}
export default configCors
