import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

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
        <div>{count}</div>

        <div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Inrement
          </button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
}

export default App;
