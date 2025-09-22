async function fetchApiResponse(){
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		const result = response.json()
		console.log(result)
	} catch (err) {
		console.log(err)
	}
}
fetchApiResponse()
