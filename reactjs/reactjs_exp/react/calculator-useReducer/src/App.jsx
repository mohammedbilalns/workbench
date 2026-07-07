
import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1 ] = useState(0)
  const [num2 , setNum2] = useState(0)
  const reducer = (state, type)=>{
    if(type =="add"){
      return +num1+ +num2
    }else if(type =="substract" ){
      return +num1 - +num2 
    }else if(type == "divide"){
      return +num1 / +num2 
    }else if(type == "multiply"){
      return +num1 * + num2
    }else {
      return "Invalid operation "
    }

  }
  const [result , dispatch  ] = useReducer(reducer, 0 )
  


  return (
    <>
      <input type="number" value={num1} onChange={(e)=> setNum1(e.target.value)}  />
      <br />
      <input type='number' value={num2} onChange={(e)=> setNum2(e.target.value)}></input>
      <br />
      <button onClick={()=> dispatch("add")}>+</button>
      <button onClick={()=> dispatch("substract")}>-</button>
      <button onClick={()=> dispatch("divide")}>/</button>
      <button onClick={()=> dispatch("multiply")}>*</button>
      <p>resutlt : {result}</p>
    </>
  )
}

export default App
