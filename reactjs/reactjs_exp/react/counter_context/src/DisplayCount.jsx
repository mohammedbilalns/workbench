import { useContext } from "react";
import countContext from "./CountContext";
export default function DisplayCount() {
  const { count } = useContext(countContext);
console.log(count)
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
