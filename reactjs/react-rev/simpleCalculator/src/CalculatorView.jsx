import { add, substract, multiply, divide } from "./calculator.js";

function CalculatorView() {
  return (
    <>
      <h1>Calculator</h1>
      <ol>
        <li>{add(5, 3)}</li>
        <li>{substract(5, 3)}</li>
        <li> {multiply(5, 4)} </li>
        <li> {divide(43, 3)}</li>
      </ol>
    </>
  );
}

export default CalculatorView;
