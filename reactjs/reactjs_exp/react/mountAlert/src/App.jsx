import { useState } from "react";
import Comp from "./Comp";
function App() {
  const [show, setShow] = useState(false)

  return <>

    <button onClick={()=> setShow(!show)}> {show ?"hide":"show" }</button>

    {show && <Comp/> }
  </>


}

export default App;
