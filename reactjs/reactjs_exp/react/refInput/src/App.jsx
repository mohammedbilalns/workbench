import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const displayRef = ()=>{
    console.log(inputRef.current.style)
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={()=>displayRef()}>view</button>
    </>
  );
}

export default App;
