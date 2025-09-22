export default  async function ProductFilter({params}:{params:Promise<{slug: string[]}>}){
	const slug  = await params 
	console.log(slug.slug) // array of dynamic route params 

	return <div>Test</div>
}
