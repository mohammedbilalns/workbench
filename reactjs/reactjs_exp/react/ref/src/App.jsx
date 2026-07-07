
import { useRef } from 'react'
import './App.css'

function App() {
  const boxRef = useRef()
  const ChangeColor = ()=>{
    boxRef.current.style.backgroundColor = "yellow"
  }

  return (
    <>
      <div ref={boxRef} style={{width:"100px",height:"100px" , backgroundColor:"blue"}}></div>
    <button onClick={()=> ChangeColor()}>Change color</button>
    </>
  )
}

export default App
