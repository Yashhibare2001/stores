import { Link } from "react-router-dom";
import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/stores">Stores</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
