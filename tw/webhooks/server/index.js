
document.getElementById('sendWebhook').onclick = async () =>{
	const response = await fetch("http://localhost:3000/webhook-example", {
		method:"POST",
		headers:{"Content-Type": "application/json"},
		body: JSON.stringify({message:"Hello from client"})
	})
	const text = await response.text() 
	document.getElementById('result').innerText = text
}
