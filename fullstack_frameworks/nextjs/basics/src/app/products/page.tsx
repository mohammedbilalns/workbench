"use client"
import Link  from "next/link"

export default function Products(){
		const products = [{id:1, name:"mobile", price:4343},{id:2, name:"cat", price:32},{id:3, name:"comb", price:34}]

	return <div>
		<h1 className="text-2xl font-bold mb-4">Products</h1>
		<div className="grid gap-4">
			{products.map(product=>( <div key={product.id} className="border p-4 rounded">
				<h2>{product.name}</h2>
				<p>{product.price}</p>
				<Link href={`/products/${product.id}`}>View details </Link>	
			</div>))}
		</div>
	</div>
}
