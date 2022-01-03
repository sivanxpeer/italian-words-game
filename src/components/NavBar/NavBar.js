import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-container">
        <a href="/">🌏</a>
      <Link to="/">BiLinguale</Link>
      <Link to="/gamecard">Learn Italian!</Link>
      <Link to="/user">User Profile</Link>
    </nav>
  );
};

export default NavBar;
