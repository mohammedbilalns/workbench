import Products from "../models/Products.js";
import Product from "../models/Products.js"

export const insertSampleProducts = async (req, res) => {
	try {
		const sampleProducts = [
			{ name: "Laptop", category: "Electronics", price: 45000, tags: ["computer", "tech"], inStock: true },
			{ name: "Sneakers", category: "Footwear", price: 3500, tags: ["shoes", "fashion"], inStock: false },
			{ name: "Bluetooth Speaker", category: "Electronics", price: 2200, tags: ["audio", "portable"], inStock: true },
			{ name: "Wrist Watch", category: "Accessories", price: 1500, tags: ["time", "fashion"], inStock: true },
			{ name: "T-Shirt", category: "Clothing", price: 799, tags: ["apparel", "casual"], inStock: false },
			{ name: "Smartphone", category: "Electronics", price: 29999, tags: ["mobile", "tech"], inStock: true },
			{ name: "Backpack", category: "Bags", price: 1299, tags: ["travel", "carry"], inStock: true },
			{ name: "Office Chair", category: "Furniture", price: 5200, tags: ["comfort", "work"], inStock: false },
			{ name: "Cookware Set", category: "Kitchen", price: 2799, tags: ["cooking", "home"], inStock: true },
			{ name: "Yoga Mat", category: "Fitness", price: 699, tags: ["exercise", "health"], inStock: true }
		];

		await Products.insertMany(sampleProducts)
		res.json({ message: "Inserted products" })

	} catch (err) {
		res.status(500).json({ message: err })
	}
}
export const getProductAnalysis = async (req,res) =>{
	try{
		const result = await Product.aggregate([
			{$match:{category:"Electronics"}},
			{$group:{
				_id: null,
				totalRevenue: {$sum: "$price"},
				avgPrice: {$avg: "$price"},
				maxPrice: {$max: "$price"},
				minPrice: {$min: "$price"},
				
			}},{
				$project: {
					_id: 0,
					totalRevenue: 1,
					avgPrice: 1,
					maxPrice: 1,
					minPrice: 1,
					priceRange:{
						$subtract: ["$maxPrice", "$minPrice"]
					}
					
			}}
		])
		res.json(result)

	}catch(err){
		res.status(500).json({ message: err.message })
	}
}

// get products with with stock and price > 2000  
export const getProductsStats = async (req, res) => {
	try {
		const result = await Products.aggregate([
			{ $match: { inStock: true, price: { $gte: 2000 } } },
			{
				$group: {
					_id: '$category',
					avgPrice: {
						$avg: '$price'
					},
					count: {
						$sum: 1
					}
				}
			}
		])
		res.json(result)

	} catch (err) {

	}
}
