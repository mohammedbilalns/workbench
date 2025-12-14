import express from "express"

const app = express()

app.use((_req,res)=>{
  res.setHeader("Content-Type", "text/html")
  res.status(404).send("Not Found")
})



app.listen(3000)
