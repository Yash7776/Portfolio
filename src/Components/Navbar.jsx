import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <div class="container">
            <nav class="navbar">
                <Link to="/" class="logo">YP</Link>
                <ul class="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Navbar
