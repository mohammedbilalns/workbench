import { useState } from 'react'
import './App.css'
import { useStore } from './zustand'

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  const resetPopulation = useStore((state) => state.removeAllBears)
  const updatePopulation = useStore((state) => state.updateBears)
  const [newCount, setNewCount] = useState(0)
  return <>
    <button onClick={increasePopulation} >one up </button>
    <button onClick={resetPopulation}>Reset Population</button>
    <input type="number" value={newCount} onChange={(e) => setNewCount(e.target.value)} />
    <button onClick={() => updatePopulation(newCount)}>Update count</button>
  </>

}

function App() {
  return <>
    <BearCounter></BearCounter>
    <Controls></Controls>
  </>
}

export default App
