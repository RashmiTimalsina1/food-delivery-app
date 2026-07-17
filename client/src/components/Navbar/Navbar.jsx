import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar({ setShowLogin }) {
  return (
    <nav className="navbar">

      <div className="logo">
        🍔 Food Delivery
      </div>

      <ul className="menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>

      <div className="nav-right">
        <button>🔍</button>
        <button>🛒</button>

        <button onClick={() => setShowLogin(true)}>
          Sign In
        </button>
      </div>

    </nav>
  );
}

export default Navbar;