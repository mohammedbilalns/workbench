import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
import "./App.css";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default App;
