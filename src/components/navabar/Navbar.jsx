import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../log.png" alt="Your Game Logo" />
      </div>
      <ul className="nav-links">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li><a href="#media">Media</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#purchase">Purchase</a></li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
