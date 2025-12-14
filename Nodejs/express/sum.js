import express from "express"

const app = express()


app.get("/sum/:number1/:number2",(req,res)=>{
  const {number1, number2} = req.params
  res.send(parseInt(number1) + parseInt(number2))
})

const server = app.listen(3000, ()=>{
  console.log(`Server running on port 3000`)
})

server.on("error", (err)=>{
  console.error(`Failed to listen to the server ${err}`)
})
