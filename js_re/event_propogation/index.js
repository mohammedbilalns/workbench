document.querySelector("#grandparent").addEventListener("click", ()=>{
	console.log("Grandparent clicked")
},false)

document.querySelector("#parent").addEventListener("click", ()=>{
	console.log("parent clicked")
}, false)
document.querySelector("#child").addEventListener("click", (e)=>{
	console.log("child clicked")
	e.stopPropagation()
},false)
