import { useMemo } from "react"
import "./App.css"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  const [userInput , setUserInput] = useState("")
  const price = useMemo(()=>{
    console.log("Function called")
    return count * 10
  },[count] )
  

 
  return (
    <>
    <p>{count}</p>
    <button onClick={()=> setCount(count+1)}>+</button>      
    <p>Price : {price}</p>

    <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
    </>
  )
}

export default App
