import { useReducer } from "react";
import "./App.css";
import { useState } from "react";

const reducer = (state, dispatch) => {
  const { type, quantity, userCount, setQuantity, setUserCount } = dispatch;
  if (type == "add") {
    if (userCount <= quantity) {
      setQuantity(quantity - userCount);
      return state + 15 * userCount
    }
  } else if (type == "remove") {
    if(quantity>0){
      setQuantity(quantity+1)
      setUserCount(userCount-1)
      return state-15 
    }
  }
};
function App() {
  const [amount, dispatch] = useReducer(reducer, 0);
  const [quantity, setQuantity] = useState(50);
  const [userCount, setUserCount] = useState(0);

  return (
    <>
      <p>Available : {quantity}</p>
      <p>Quantity to add </p>
      <input
        type="number"
        value={userCount}
        onChange={(e) => setUserCount(e.target.value)}
      />
      <button
      onClick={()=>dispatch({
        type: "add",
        quantity,
        userCount,
        setQuantity,
        setUserCount,
      })}
        
      >
        Add to cart{" "}
      </button>
      <br />
      <button
      onClick={()=> dispatch({
        type: "remove",
        quantity,
        userCount,
        setQuantity,
        setUserCount,
      })}
       
      >
        Decrease from cart
      </button>
      <p>Amount : {amount}</p>
    </>
  );
}

export default App;
