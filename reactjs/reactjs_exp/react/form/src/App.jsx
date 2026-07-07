import { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  function displayName(e) {
    e.preventDefault();
    console.log(name);
    setName(""); 
    inputRef.current.focus();
  }

  return (
    <>
      <form onSubmit={displayName}>
        <label htmlFor="">Enter your name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
