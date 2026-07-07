import { useState } from "react";
import "./app.css";
import UserDetail from "./components/UserDetail";

function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <>
      <UserDetail count={count} ></UserDetail>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
}

export default App;
