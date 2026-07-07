import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByCount,
  fetchData,
} from "./features/counterSlice";
import { useEffect, useState } from "react";

function App() {
  const [incrementValue, setIncrementValue] = useState(0);
  const { count, data, status } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type="number"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
      />
      <button
        onClick={() => dispatch(incrementByCount(Number(incrementValue)))}
      >
        Increment by count
      </button>
      <p>{status}</p>
    </>
  );
}

export default App;
