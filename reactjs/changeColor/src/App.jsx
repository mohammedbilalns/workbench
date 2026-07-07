import { useRef } from "react";

function App() {
  const boxRef = useRef();

  function changeColor() {
    if (boxRef.current.style.backgroundColor == "blue") {
      boxRef.current.style.backgroundColor = "yellow";
    }
  }
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
