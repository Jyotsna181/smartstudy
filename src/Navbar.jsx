import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <a href="#" className="logo">
        SmartStudy
      </a>
      <div
        id="menu"
        className={`fas ${showMenu ? "fa-times" : "fa-bars"} ${
          showMenu ? "active" : ""
        }`}
        onClick={toggleMenu}
      ></div>
      <nav className={`navbar ${showMenu ? "active" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/course" className="nav-link">
          Course
        </Link>
        <Link to="/teacher" className="nav-link">
          Teachers
        </Link>
        <Link to="/price" className="nav-link">
          Price
        </Link>
        <Link to="/review" className="nav-link">
          Review
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
