import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Traccer Logo" className="logo-image" />
        </Link>
        <Link to="/" className="app-name-link">
          <span className="app-name">Traccar</span>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`buttons ${menuOpen ? 'show' : ''}`}>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
