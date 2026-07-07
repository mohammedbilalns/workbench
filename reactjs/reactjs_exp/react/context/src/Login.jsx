import { useContext, useState } from "react";
import { userContext } from "./App";

export default function Login() {
  const [value, setValue] = useState("");
  const { user, dispatch } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login", payload: value });
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
