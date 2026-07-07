import { useState, memo } from "react";
import MemoComponent from "./MemoComponent";
import "./App.css";

const MemoizedComp = memo(MemoComponent);
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <MemoComponent count={count}></MemoComponent>
      {/* <MemoizedComp count={count}></MemoizedComp> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </>
  );
}

export default App;
