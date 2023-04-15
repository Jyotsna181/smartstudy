import React from "react";
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <a href="#" class="logo">SmartStudy</a>
      <div id="menu" class="fas fa-bars"></div>
      <nav className="navbar"> 
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/course" className="nav-link">Course</Link>
        <Link to="/teacher" className="nav-link">Teachers</Link>
        <Link to="/price" className="nav-link">Price</Link>
        <Link to="/review" className="nav-link">Review</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;