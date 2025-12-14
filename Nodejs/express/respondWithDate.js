import express from "express"

const app = express()

app.use((_req, res)=>{
  const date  = new Date()

  res.send(date.toString())
})


app.listen(3000)

