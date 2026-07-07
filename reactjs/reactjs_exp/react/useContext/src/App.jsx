import ChildOne from "./components/ChildOne";
import { useState } from "react";
import TestContext from "./context";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Parent</h1>
      <TestContext.Provider value={{ count, setCount }}>
        <ChildOne></ChildOne>
      </TestContext.Provider>
    </>
  );
}

export default App;
