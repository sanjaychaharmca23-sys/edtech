import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import "./Header.css";
import logo from "../image/lolo.png";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Scroll + outside click handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`smart-header ${isScrolled ? "scrolled" : ""}`}>
      {/* ===== DESKTOP HEADER ===== */}
      <div className="desktop-header">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="EduPulse Logo" className="logo-img" />

            <span className="logo-text">EduPulse</span>
          </Link>

          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <div
              className="nav-dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                All Courses <FiChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/courses" className="dropdown-item">All Courses</Link>
                  <Link to="/courses/jee" className="dropdown-item">JEE Main & Advanced</Link>
                  <Link to="/courses/neet" className="dropdown-item">NEET UG</Link>
                  <Link to="/courses/foundation" className="dropdown-item">Foundation (6–10)</Link>
                  <Link to="/courses/cbse" className="dropdown-item">CBSE 11–12</Link>
                </div>
              )}
            </div>
            <Link to="/vidyapeeth" className="nav-link">Vidyapeeth</Link>
            <Link to="/upskilling" className="nav-link">Upskilling</Link>
            <Link to="/books" className="nav-link">Books Store</Link>
            <Link to="/real-test" className="nav-link">REAL Test</Link>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" onClick={() => navigate("/cart")} aria-label="Cart">
              <FiShoppingCart />
            </button>
            <button className="icon-btn" onClick={() => navigate("/login")} aria-label="User">
              <FiUser />
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE HEADER ===== */}
      <div className="mobile-header">
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FiMenu size={22} />
        </button>

        <Link to="/" className="mobile-logo">
          <img src={logo} alt="EduPulse Logo" className="logo-img" />

        </Link>

        <button className="mobile-login-btn" onClick={() => navigate("/login")}>
          Login/Register
        </button>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="drawer">
          <div className="drawer-header">
            <img src="/elogo.png" alt="EduPulse" />
            <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <FiX />
            </button>
          </div>

          <nav className="drawer-links">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>All Courses</Link>
            <Link to="/vidyapeeth" onClick={() => setIsMobileMenuOpen(false)}>Vidyapeeth</Link>
            <Link to="/upskilling" onClick={() => setIsMobileMenuOpen(false)}>Upskilling</Link>
            <Link to="/books" onClick={() => setIsMobileMenuOpen(false)}>Books Store</Link>
            <Link to="/real-test" onClick={() => setIsMobileMenuOpen(false)}>REAL Test</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
