import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <!-- NavBAR start --> */}
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/">
              <img
                src="./images/00001-removebg-preview.webp"
                alt="logo"
                height="50px"
              />
            </Link>
          </div>
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <!-- NavBAR end --> */}
    </div>
  );
};

export default Navbar;