import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav id="navbar-container" data-visible="false" className="navbar-container">
        <Link to="/"className="globus">🌏</Link>
      <Link to="/" className="link bi">BiLinguale</Link>
      <Link to="/gamecard" className="link learn">Learn Italian!</Link>
      <Link to="/user" className="link user">User Profile</Link>
    </nav>
  );
};

export default NavBar;
