const container = document.getElementById("container")
let data = []

function renderList(data){
	container.innerHTML = ""
	data.forEach(item => {
		const dataContainer = document.createElement("li");
		const titleElement = document.createElement("h3");
		const completed = item.completed
		if(completed){
			titleElement.style.textDecoration = "line-through" 

		}
		titleElement.setAttribute("id",`item:${item.id}`)
		titleElement.textContent = item.title
		dataContainer.appendChild(titleElement)
		container.appendChild(dataContainer)
	});

}

window.addEventListener("load", async ()=>{
	const res = await fetch('https://jsonplaceholder.typicode.com/todos') 
 	data = await res.json()
	console.log(data)
	data.sort((a,b)=> a.completed - b.completed)
	renderList(data)
})


container.addEventListener("click",(e)=>{

	const id =e.target.id
	if (id && id.startsWith("item")) {
		const itemId = id.split(":")[1];
		const item = data.find(item => item.id == itemId)
		if(item){
			item.completed = !item.completed 
		}
		data.sort((a,b)=> a.completed - b.completed)
		renderList(data)

	}
})




