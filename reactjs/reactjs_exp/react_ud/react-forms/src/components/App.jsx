import React, { useState } from "react";

function App() {
  const [name, updateName] = useState("");
  const [backgroundColor, updateBackgroundColor] = useState("white");
  const [headingText, updateHeadingText] = useState("");
  function handleChange(event) {
    updateName(event.target.value);
  }
  function mouseOver() {
    updateBackgroundColor("black");
  }
  function MouseOut() {
    updateBackgroundColor("white");
  }
  function handleClick(event) {
    // console.log(name);
    updateHeadingText(name);
    // updateName(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1> Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          onMouseOver={mouseOver}
          onMouseOut={MouseOut}
          style={{ backgroundColor }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
