import { useContext } from "react";
import countContext from "./countContext";

export default function ViewCount() {
  const { count } = useContext(countContext);
  console.log(count);

  return (
    <>
      <p>{count}</p>
    </>
  );
}
