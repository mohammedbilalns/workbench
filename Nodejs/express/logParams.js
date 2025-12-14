import express from "express"

const app = express()

const logParams = (req,_res,next)=>{
  console.log("Params: ",req.params)
  next()
}

app.get("/user/:id",logParams, (req,res)=>{
  res.send(`user: ${req.params.id}`)
})



app.listen(3000, ()=>{
  console.log("Server listening.. ")
})
