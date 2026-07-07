import React from "react";
import Form from "./Form";
function App() {
  const isLoggedIn = true;
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Form></Form>}
    </div>
  );
}

export default App;
