import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="heading">
        <li>முகப்பு</li>
        <li>அரசியல்</li>
        <li>விளையாட்டு</li>
        <li>திரைப்படம்</li>
        <li>கலை</li>
      </ul>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home"><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#world"><i className="fa-solid fa-language"></i> English</a>
          <a href="#sports"><i className="fa-solid fa-sun"></i></a>
          <a href="#tech"><i className="fa-solid fa-user"></i></a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
    </nav>
  );
}
export default Navbar;
