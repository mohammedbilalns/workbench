import express from "express"
import path from "path"
import { fileURLToPath } from "url"
const app = express()
const PORT = 3000 

const __filename = fileURLToPath( import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'views'))

const products = [
	{name:"bag", price:23}, {name:"pen", price:5}
]

app.get("/", (req,res)=>{
	res.render("home", {title:"Home Page", products})
})

app.get("/about", (req,res) =>{
	res.render("about", {title:"About Page"})
})
app.post('/api/data', (req,res)=>{
	res.json({message:"Data recieved", data : req.body})
})


app.use((err,req,res, next)=>{
	if(err){

		console.log("Something went wrong", err)
		res.status(500).send("Somethign went wrong")
	}
})
app.listen(PORT,()=>{
	console.log("Server running... ")
})
