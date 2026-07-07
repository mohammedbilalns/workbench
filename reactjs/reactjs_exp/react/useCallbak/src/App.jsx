import { useState } from "react";
import List from "./List";
import { useCallback } from "react";
function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  return (
    <div style={theme}>
      <input
        onChange={(e) => setNumber(parseInt(e.target.value))}
        type="number"
        value={number}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems}></List>
    </div>
  );
}

export default App;
