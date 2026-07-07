import express from "express";
import path from "node:path"

const app = express()
const port = process.env.PORT|| 3000
const __dirname = import.meta.dirname;

app.use(express.static("views"))

app.get("/", (req,res) =>{
    res.sendFile("index.html")
})


app.get("/contact", (req, res)=>{
    res.send("fsjknfksndfjn")
})

app.get("*", (req, res)=>{
    res.send("404")
})
app.listen(port , ()=> {
    console.log(`Server running on`)
})