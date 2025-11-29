import {  useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const handleClick= ()=>{
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "yellow"
  }

  return (
    <>
      <input type="text" ref={inputRef}  />
      <button onClick={handleClick} >Click me</button>
    </>
  );
}

export default App;
