import { useState } from "react";
import MemoComp from "./MemoComp";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p> {name}</p>
      <MemoComp count={count}></MemoComp>
      <button onClick={() => setCount(count + 1)}>Increment </button>
    </>
  );
}

export default App;
