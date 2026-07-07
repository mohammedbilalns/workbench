
import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount]  = useState(0)
  const [name, setName] = useState("")

  const calculateSum = ()=>{
    console.log("function initialized ")
  }

  
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>+</button>
    <br />
    <p>{sum}</p>
   <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </>
  )
}

export default App
