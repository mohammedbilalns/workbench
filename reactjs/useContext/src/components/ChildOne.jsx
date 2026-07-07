import ChildTwo from "./ChildTwo";
import TestContext from "../context";
import { useContext } from "react";
export default function ChildOne() {
  const { setCount } = useContext(TestContext);
  return (
    <div>
      child 1
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <ChildTwo></ChildTwo>
    </div>
  );
}
