import { useReducer, useState } from "react";
import "./App.css";


const reducer = (state, action)=>{
  const type = action.type 
  const {num1, num2} = action.payload

  if(type== "add"){
    return +num1+ +num2
  }else if(type=='substract'){
    return +num1- +num2
  }else if(type == "divide"){
    return +num1 / +num2
  }else if(type == "multiply"){
    return +num1 * +num2
  }else {
    return "Invalid operation "
  }

}

function App() {
  
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [result , dispatch] = useReducer(reducer, 0 )
  const handleChange = (e)=>{
    const operation = e.target.value 
    if(operation != "none"){
      dispatch({type:operation, payload:{num1, num2}})
    }
  }
  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
<br />  
      <select name="options" id="" onChange={handleChange}>
        <option value="none">Choose an operation</option>
        <option value="add">+</option>
        <option value="substract">-</option>
        <option value="divide">/</option>
        <option value="multiply">*</option>
      </select>
      <br />
      <p>Result : {result}</p>
    </>
    
  );
}

export default App;
