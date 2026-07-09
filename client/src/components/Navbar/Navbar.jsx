import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
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
        <button>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;