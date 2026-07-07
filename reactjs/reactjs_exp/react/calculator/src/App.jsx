import { useReducer } from "react";
import "./App.css";

const initalValue = { firstNum: 0, secondNum: 0, result: 0 };
const reducer = (state, action) => {
  if (action.type == "add") {
    return { ...state, result: +state.firstNum + +state.secondNum };
  } else if (action.type == "updateFirst") {
    return { ...state, firstNum: action.payLoad };
  } else if (action.type == "updateSecond") {
    return { ...state, secondNum: action.payLoad };
  } else if (action.type == "substract") {
    return { ...state, result: +state.firstNum - +state.secondNum };
  } else if (action.type == "divide") {
    return { ...state, result: +state.firstNum / +state.secondNum };
  } else if (action.type == "multiply") {
    return { ...state, result: +state.firstNum * +state.secondNum };
  }
};

function App() {
  const [calculator, dispatch] = useReducer(reducer, initalValue);

  return (
    <>
      <input
        type="number"
        value={calculator.firstNum}
        onChange={(e) =>
          dispatch({ type: "updateFirst", payLoad: e.target.value })
        }
      />
      <br />
      <input
        type="number"
        value={calculator.secondNum}
        onChange={(e) =>
          dispatch({ type: "updateSecond", payLoad: e.target.value })
        }
      />
      <br />
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      <button onClick={() => dispatch({ type: "substract" })}>substract</button>
      <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
      <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
      <br />
      <p>{calculator.result}</p>
    </>
  );
}

export default App;
