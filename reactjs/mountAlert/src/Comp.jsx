import { useEffect } from "react";

export default function Comp() {
  useEffect(() => {
    alert("Component mounted");
    return () => {
      alert("Component unmounted");
    };
  }, []);
  return <div> component</div>;
}
