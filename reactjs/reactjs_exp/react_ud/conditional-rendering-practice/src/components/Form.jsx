import React from "react";
import Input from "./Input";
import Button from "./Button";
function Form(props) {
  console.log(props.isRegisterd);
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {props.isRegistered ? (
        <Button text="Sign In"></Button>
      ) : (
        <>
          <Input type="password" placeholder="Confirm Password" />
          <Button text="Sign Up"></Button>
        </>
      )}
    </form>
  );
}

export default Form;
