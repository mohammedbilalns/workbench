import { useContext } from "react";
import countContext from "./countContext";

export default function IncrementCount() {
  const { setCount } = useContext(countContext);
  return <button onClick={() => setCount((prev) => prev + 1)}>+</button>;
}
