
import { useState } from 'react'
import DisplayName from './DisplayName'
import './App.css'
import NameContext from './NameContext'

function App() {
  const [name , setName] = useState("")

  return (
    <>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <NameContext.Provider value={name}>

      <DisplayName></DisplayName>


      </NameContext.Provider>
    </>
  )
}

export default App
