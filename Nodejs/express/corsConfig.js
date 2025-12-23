import cors from "cors"


const configureCors = () =>{
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:3000',
        'fsdnfsjkdf.fsdfsf'
      ]

      if(!origin || allowedOrigins.indexOf(origin) !== -1){
        callback(null, true) // allow origins 
      }else{
        callback(new Error(`Not allowed by cors `))
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept-Version'
    ],
    exposedHeaders: [
      'X-Total-Count',
      'Content-Range'
    ],
    credentials: true,  // enable support for cookies 
    preflightContinue: false,
    maxAge: 600, // cache pre flight responses for 10 mins -> avoid sending options multiple times 

  })
}

export default configureCors
