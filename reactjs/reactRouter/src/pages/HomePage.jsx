import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/dashboard/profile", { state: { username } });
  }
  function prev(){
    navigate(-1)
  }
  return (
    <div>
      This is home page
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleNavigate}>Go to profile page </button>
      <button onClick={prev}>prev</button>
    </div>
  );
}
