import InputContent from "./InputContent";

function Form() {
  return (
    <form className="form">
      <InputContent type="text" placeholder="Username"></InputContent>
      <InputContent type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
