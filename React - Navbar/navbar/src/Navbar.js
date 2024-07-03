import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src='https://i.pinimg.com/564x/ef/cb/43/efcb43eaab519f5d8ddf00b02e4b783f.jpg' alt="Ciro - Mer Logo" />
          <h1>Ciro - Mer</h1>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
