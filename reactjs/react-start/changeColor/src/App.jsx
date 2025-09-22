import { useRef } from "react";

function App() {
  let boxRef = useRef(null);
  const changeColor = () => {
    if (getComputedStyle(boxRef.current).backgroundColor == "rgb(0, 0, 255)") {
      boxRef.current.style.backgroundColor = "yellow";
    } else if (
      getComputedStyle(boxRef.current).backgroundColor == "rgb(255, 255, 0)"
    ) {
      boxRef.current.style.backgroundColor = "blue";
    }
  };
  return (
    <>
      <div
        ref={boxRef}
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
      ></div>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default App;
