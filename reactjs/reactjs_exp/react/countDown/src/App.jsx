import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(10);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let intervel = null;
    if (isRunning && time > 0) {
      intervel = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

  
    return () => {
      clearInterval(intervel);
    };
  }, [time, isRunning]);
  return (
    <>
      <div> {time}</div>
      <div>
        <button onClick={() => setRunning(!isRunning)}>
          {" "}
          {isRunning ? "stop" : "resume"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(10);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
