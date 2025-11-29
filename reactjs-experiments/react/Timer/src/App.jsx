import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div> {time}</div>
        <div>
          <button onClick={() => setIsRunning(!isRunning)}>
            {" "}
            {isRunning ? "stop" : "start"}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
