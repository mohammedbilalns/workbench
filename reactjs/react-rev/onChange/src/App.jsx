import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h1 >{name}</h1>
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default App;
