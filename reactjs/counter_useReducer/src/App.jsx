
import { useReducer } from 'react'
import './App.css'

function App() {
  const reducer = (state, action)=>{
    if(action.type == "increment"){
      return state+ 1 
    }else if(action.type == "decrement"){
      return state-1 
    }else if(action.type == "reset"){
      return 0 
    }
  }
  const [count , dispatch] = useReducer(reducer, 0 )

  return (
    <>
    <p>{count}</p>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=> dispatch({type: "decrement"})}>-</button>
    <br />
    <br />
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  )
}

export default App
