"use client"
interface Product {
	id: number,
	title: string, 
	price: number, 
	category : string 
}

import { useEffect, useState } from "react"

export default function UseEffect(){

	let [isLoading , setIsLoading] = useState(false)
	let [data, setData]  = useState<Product[]>([])

	async function fetchLIstOfProducts(){
		setIsLoading(true )
		const res = await fetch("https://dummyjson.com/products")
		const result =  await res.json() 
		if(result){
			setIsLoading(false)
			console.log(result.products)
			setData(result?.products)
		}
	}
	useEffect(()=>{
		fetchLIstOfProducts()	
	}, [])
		return <div>
	 <h1>Use effect example</h1>
		{isLoading? "Loading": ''}
		{data?.map(product => <div className="flex flex-col gap-2" key={product.id }>
				<h3>Name: {product.title}</h3>
				<h2>Price : {product.price}</h2>
				<p> Catgory : {product.category}</p>
			</div>) }
	</div>
}
