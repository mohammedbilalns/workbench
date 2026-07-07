import React, { useState } from "react";

function App() {
  setInterval(() => {
    setTime(getTime);
  }, 1000); // update time each second

  function getTime() {
    return new Date().toLocaleTimeString().substring(1, 8);
  } // gets the current time

  let [time, setTime] = useState(getTime());
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={() => setTime(getTime)}>Get Time</button>
    </div>
  );
}

export default App;
