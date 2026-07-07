import { useReducer, useState } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type == "deposit") {
      return { ...state, balance: state.balance + Number(action.payload) };
    }

    if (action.type == "withdraw") {
      return { ...state, balance: state.balance - Number(action.payload) };
    }
  }
  return (
    <>
      {state.balance}
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button
        onClick={() => dispatch({ type: "deposit", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </>
  );
}

export default App;
