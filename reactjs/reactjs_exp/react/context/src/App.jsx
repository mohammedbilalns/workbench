import { createContext, useReducer, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import Logout from "./Logout";
export const userContext = createContext();
function App() {
  const [user, dispatch] = useReducer(userReducer, "guest");
  function userReducer(state, action) {
    if (action.type == "login") {
      return action.payload;
    }

    if (action.type == "logout") {
      return action.payload;
    }
  }
  return (
    <>
      <userContext.Provider value={{ user, dispatch }}>
        <Login></Login>
        <Checkout></Checkout>
        <Logout></Logout>
      </userContext.Provider>
    </>
  );
}

export default App;
