import express from "express"


const app  = express()

app.use((req,res, next)=>{
  if(req.method == "POST"){
    res.status(400).send("Invalid request ")
  }
  next()
})

app.get("/hi", (req,res)=>{
  console.log("hit the endponit")
  res.send("hi")
})

app.listen(3000)
