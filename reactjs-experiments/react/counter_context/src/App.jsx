
import { useState } from 'react'
import './App.css'
import countContext from './CountContext'
import DisplayCount from './DisplayCount'
import HandleCount from './HandleCount'
function App() {
  const [count, setCount] = useState(0)
  return (
    <countContext.Provider value={{count, setCount}}>
      <DisplayCount></DisplayCount>
      <HandleCount></HandleCount>
    </countContext.Provider>
  )
}

export default App
