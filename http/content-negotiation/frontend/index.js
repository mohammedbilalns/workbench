
const jsonButton = document.getElementById("jsonBtn")
const textButton = document.getElementById("textBtn")
const resultArea =  document.getElementById("result")

jsonButton.addEventListener("click", async() => {
  clearResultArea()

  const data = await fetchdata("json")
  console.log("Json data", data)
})

textButton.addEventListener("click", async () => {
  clearResultArea()

  const data = await fetchdata("text")
  console.log("Text data", data)
})
const clearResultArea = () => {
    resultArea.innerHTML = ""
}

const fetchdata = async (dataType) =>{
  const response = await fetch("http://localhost:3000/data", {
    headers:{
      "Accept": dataType === "json" ? "application/json" : "text/plain" 
    }
  })
  
  if(dataType === "json"){
    return await response.json()
  }
  const data = await response.text() 
  return data 
}

