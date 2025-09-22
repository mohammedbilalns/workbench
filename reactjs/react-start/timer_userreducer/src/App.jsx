import { useEffect, useReducer } from "react";
import "./App.css";

const initialValue = { time: 0, isRunning: false };
const reducer = (state, action) => {
  if (action.type == "start") {
    return { ...state, isRunning: true };
  } else if (action.type == "stop") {
    return { ...state, isRunning: false };
  } else if (action.type == "reset") {
    return { time: 0, isRunning: false };
  } else if (action.type == "tick") {
    return { time: state.time + 1, isRunning: true };
  }
};

function App() {
  const [timer, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    let interval = null;
    if (timer.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    } else if (!timer.isRunning) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer.isRunning]);

  return (
    <>
      <p>{timer.time}</p>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <br />

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default App;
