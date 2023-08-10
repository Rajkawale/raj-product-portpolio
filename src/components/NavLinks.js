import { useState } from "react";
import { NavLink } from "react-router-dom";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        {/* <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
         About
        </NavLink> */}
        {/* <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
         Portfolio
        </NavLink> */}
         <a href="https://portfolio.rajkawale.com/" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
         Portfolio
          </a>
        <a href="https://blog.rajkawale.com" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
         Blog
          </a>
          <a href="https://portfolio.rajkawale.com/testimonials" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
          Testinomials
          </a>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
         Contact
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
