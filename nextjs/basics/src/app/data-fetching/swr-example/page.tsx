"use client"

interface Product {
	id: number,
	title: string, 
	price: number, 
	category : string 
}

import useSWR from "swr"

const fetcher = (url:string)=> fetch(url).then(res=> res.json())

export default function SWRExample(){

	const { data, error ,isLoading , mutate} = useSWR('https://dummyjson.com/products', fetcher,  {
		revalidateOnFocus:true ,
		refreshInterval:1000,
		errorRetryCount:3 
	})
	

	if(isLoading){
		return <h1>Loading... </h1>
	}
	return <div>
	{data.products.map((product:Product) => <div className="flex flex-col gap-2" key={product.id }>
				<h3>Name: {product.title}</h3>
				<h2>Price : {product.price}</h2>
				<p> Catgory : {product.category}</p>
			</div>) }
	</div>
}
