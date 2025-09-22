import { useState } from "react";
import "./App.css";
import countContext from "./countContext";
import ViewCount from "./ViewCount";
import IncrementCount from "./IncementCount";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <countContext.Provider value={{ count, setCount }}>
        <ViewCount></ViewCount>
        <IncrementCount></IncrementCount>
      </countContext.Provider>
    </>
  );
}

export default App;
