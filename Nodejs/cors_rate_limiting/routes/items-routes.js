import { Router } from "express";
import { APIError, asyncHandler } from "../middlewares/errorHandler.js";


const router = Router()

const items = [{
	id:1 , 
	name:"item 1"
},{
		id:2,
		name:"item 2"
	} ,
	{
		id:3,
		name:"item 3"
	},
	{id:4, name: "item 4"}
]



router.get('/items', asyncHandler(async(req,res)=>{
	res.json(items)
}))
router.post('/items', asyncHandler(async(req,res)=>{
	if(!req?.body?.name){
		throw new APIError('Item name is required',400)
	}

	const newItem = {
		id:items.length +1, 
		name:req.body.name
	}
	items.push(newItem)
	res.status(200).json({message:"saved successfully"})
}))

export default router
