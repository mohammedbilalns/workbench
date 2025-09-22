interface Product {
	id: number,
	title: string, 
	price: number, 
	category : string 
}

interface ProductsResponse {
	products: Product[],
	total:number 
}
async function getProducts(): Promise<ProductsResponse> {

	const response = await fetch('https://dummyjson.com/products' )
	if(!response.ok){
		throw new Error("Failed to fetch products ")
	}
	return response.json()
}

export default async  function ServerFetching(){
	const products = await getProducts()
	return (
	<div>
			<h1>Server data fetching </h1>
			<h3>{products.total} Number of products </h3>
			{products?.products.map(product => <div className="flex flex-col gap-2" key={product.id }>
				<h3>Name: {product.title}</h3>
				<h2>Price : {product.price}</h2>
				<p> Catgory : {product.category}</p>
			</div>) }
		</div>
	)
}
