import express from "express"

const app = express()




app.get('/', (req,res)=> {
	res.send("Hello world")
})


app.get('/product/:userId/:productId', (req,res)=>{
	const {userId, productId} = req.params
	res.send(`Product ${productId} of user  ${userId}`)
})

app.listen(3000, ()=>{
	console.log(`Server running on port 3000 `)
})
