import express from "express"
import path from "node:path"

const app = express()

app.use(express.static("public"))

const __dirname = path.resolve()
console.log(__dirname)

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"./public/chatgpt.png"))
})


app.listen(3000)
