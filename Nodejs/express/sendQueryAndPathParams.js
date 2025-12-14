import express from "express"

const app = express()




app.get("/user/:userId", (req,res)=>{
  console.log(req.params)
  console.log(req.query)

  res.json({
    params: req.params,
    query: req.query
  })

})

app.listen(3000)
