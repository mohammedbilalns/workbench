import { log } from "console"

export default async  function ProductDetails({params}:{params: Promise<{slug:string}>}){
	const {slug} = await params
	log(slug)	
		return <div>
		<h1>Product {slug} Details</h1>
	</div>
}
