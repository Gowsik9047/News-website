import React, { useState } from "react";
import logo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="navbar">
      <img
        src={logo}
        alt="Logo"
        className=""
      />
        <div className="heading">
          <p>அரசியல்</p>
          <p>மனித உரிமைகள்</p>
          <p>விளையாட்டு</p>
          <p>கலை</p>
          <p>திரைப்படம்</p>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home"><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#world"><i className="fa-solid fa-language"></i> English</a>
          <a href="#sports"><i className="fa-solid fa-sun"></i></a>
          <a href="#tech"><i className="fa-solid fa-user"></i></a>
        </div>

        <div className="menu-icon fa-solid fa-bars" onClick={toggleMenu}>
        </div>
    </nav>
    <div className="live-header">
      <button>Live</button>
      <span>உடனடி: மைல்கல் சிவில் உரிமைகள் வழக்கில் நீதிமன்ற தீர்ப்பு</span>
      <i className="fa-solid fa-close"></i>
    </div>
    </div>

  );
}

export default Navbar;
