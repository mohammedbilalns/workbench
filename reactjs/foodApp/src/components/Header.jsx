import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Onilne status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery"> Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"));
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
