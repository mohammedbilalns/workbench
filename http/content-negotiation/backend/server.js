import express from "express"
import cors from "cors"

const app = express()

app.use(
  cors({
    origin: "*",
  })
)

app.get("/data", (req, res) => {

  const accept = req.headers.accept

  if(accept === "application/json"){
    res.json({message: "Hello World"})
  }else if(accept === "text/plain"){
    res.send("Hello World")
  }else{
    res.json({message: "Unsupported Media Type"})
  }
})


app.listen(3000, () => {
  console.log("Server started on port 3000")
})
