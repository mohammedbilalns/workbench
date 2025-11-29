import React, { useState } from "react";
function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleClick() {
    console.log("Clicked");
    setHeadingText("Submitted");
  }
  let color;
  function mouseOver() {
    setBackgroundColor("black");
  }
  function mouseOut() {
    setBackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
