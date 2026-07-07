import { useContext } from "react";
import TestContext from "../context";
export default function ChildThree() {
  const { count } = useContext(TestContext);
  return (
    <div>
      child 3
      <br />
      <p>{count}</p>
    </div>
  );
}
