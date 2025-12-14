import express from "express"
import fs from "node:fs/promises"
import path from "node:path"

const logPath = path.resolve("logs")
const logFile = path.resolve(logPath,"log.txt")
const app = express()

app.use(async (req,res,next)=>{

  if(req.method == "GET"){
    res.status(401).json({message:"Forbidden"})
  }else{
    try{
      const date = new Date()
      await fs.mkdir(logPath, {recursive: true })
      await fs.appendFile(logFile, `${req.method} -> ${date.toLocaleDateString()} ${date.toLocaleTimeString()}\n`)
      console.log("log written")
    }catch(error){
      console.error("Error: ", error)
    }
  }

  next()
})


app.listen(3000)
