import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/logSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}> +</button>
    </>
  );
}

export default App;
