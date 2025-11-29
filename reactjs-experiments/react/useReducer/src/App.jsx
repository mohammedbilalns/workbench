import {  useReducer, useState } from "react";
import "./app.css";
function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

  function reducer(state, action) {
    if (action.type == "increment") {
      return {
        ...state,
        count: state.count + action.payload * state.incrementBy,
      };
    }
    if (action.type == "decrement") {
      return {
        ...state,
        count: state.count - action.payload * state.incrementBy,
      };
    }

    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <div className="container">
      useReducer:{state.count}
      <p>usState: {count}</p>
      <div>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "setIncrement", payload: Number(e.target.value) })
          }
          value={state.incrementBy}
        />
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        {" "}
        Increment count reducer
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement count reducer
      </button>
    </div>
  );
}

export default App;
