import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const cartItems = useSelector((store)=> store.cart.items) // subscribing to the store 
  console.log(cartItems)
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
          <li><Link to="/cart">Cart- {cartItems.length} items</Link></li>
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
