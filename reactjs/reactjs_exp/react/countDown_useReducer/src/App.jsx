import { useReducer } from "react";
import "./App.css";
import { useEffect } from "react";

const initialValue = { time: 50, isRunning: false, startValue: 50 };
const reducer = (state, action) => {
  if (action.type == "start") {
    return { ...state, isRunning: true };
  } else if (action.type == "stop") {
    return { ...state, isRunning: false };
  } else if (action.type == "reset") {
    return { ...state, time: state.startValue, isRunning: false };
  } else if (action.type == "tick") {
    if (state.time > 0) {
      return { ...state, time: state.time - 1 };
    } else {
      return { ...state, isRunning: false };
    }
  } else if (action.type == "change-start") {
    return {
      time: action.payload,
      isRunning: false,
      startValue: action.payload,
    };
  }
};

function App() {
  const [countDown, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    let intervel = null;
    if (countDown.isRunning) {
      intervel = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    } else if (!countDown.isRunning) {
      clearInterval(intervel);
    }
    return () => {
      clearInterval(intervel);
    };
  }, [countDown.isRunning]);

  return (
    <>
      <input
        type="number"
        value={countDown.startValue}
        onChange={(e) =>
          dispatch({ type: "change-start", payload: e.target.value })
        }
      />
      <p>{countDown.time}</p>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default App;
