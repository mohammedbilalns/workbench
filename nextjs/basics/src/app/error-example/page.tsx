async function getProducts(){
	const shouldError = Math.random() >0.5 

	if(shouldError) throw new Error('Failed to fetch products')
	return [{id:1, name:"pen"},{id:2, name:"pen"},{id:3, name:"pen"},{id:4, name:"pen"}]

}
export default async function Example(){
	const products = await getProducts()


	return <div className="p-4">
		<h1>Products lis </h1>
		<div className="grid gap-4">
			{products.map(product => <div key={product.id}>

				<p>{product.name}</p>

			</div>)}
		</div>
	</div>
}
