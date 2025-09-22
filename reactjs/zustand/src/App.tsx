
import './App.css'
import { useCounterStore } from './store'

function App() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  return (
    <>

      <div className="card">
        <button onClick={() => {}}>
          count is {count}
        </button>
       <button onClick={ increment} >increment</button>
        <button onClick={ decrement} >decrement</button>
      </div>
    </>
  )
}

export default App
