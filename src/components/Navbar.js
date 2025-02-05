import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import logo4 from "../images/logo.png";
import logo4 from "../images/Amanlogo.avif";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const [hamburgerIsFocus, setHamburgerIsFocus] = useState(false);

  // const isServicesPage = location.pathname.split("/")[1] === "services";

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setHamburgerIsOpen((hamburgerIsOpen) => !hamburgerIsOpen);
  };

  const subMenuRef = useRef(null);
  const subSubMenuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      setIsNavbarTransparent(!entry.isIntersecting);
      setIsSticky(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(navbarRef.current);

    return () => {
      observer.unobserve(navbarRef.current);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target) &&
        subSubMenuRef.current &&
        !subSubMenuRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const closeDropdowns = () => {
    setSubMenuOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg navbar-dark  ${
        isSticky ? "sticky" : ""
      } ${isNavOpen ? "show" : ""}`}
      style={{
        top: "0",
        zIndex: "1000",
        padding: "0 40px 0 28px",
      }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo4}
            alt="Your Logo"
            className="d-inline-block align-text-top logo"
          />
        </NavLink>

        <button
          className={`hamburger ${hamburgerIsOpen ? "open" : ""}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="navbar-link"
                to="/"
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? { color: "#fc0c8c" } : {})}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="navbar-link"
                to="/about"
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? { color: "#fc0c8c" } : {})}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="navbar-link"
                to="/OurWork"
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? { color: "#fc0c8c" } : {})}
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navbar-link"
                to="/careers"
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? { color: "#fc0c8c" } : {})}
              >
                Careers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="navbar-link"
                to="/blogger"
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? { color: "#fc0c8c" } : {})}
              >
                Blogger's Mela
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navbar-link"
                to="/Eshower"
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? { color: "#fc0c8c" } : {})}
              >
                E-Shower
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
