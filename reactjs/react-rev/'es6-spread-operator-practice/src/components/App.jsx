import React, { useState } from "react";
import Item from "./Item";
function App() {
  // let itemList = ["A item ", "Another item ", "another another item "];
  const [itemInput, setItemInput] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    setItemInput(event.target.value);
  }
  function handleClick() {
    setItemList((prevVal) => {
      return [...prevVal, [itemInput]];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={itemInput} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      {itemList.map((item) => (
        <Item content={item}></Item>
      ))}
    </div>
  );
}

export default App;
