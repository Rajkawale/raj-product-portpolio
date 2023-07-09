import React from 'react';
import NavLinks from "./NavLinks";
import './Header.css'; // import the CSS file

const Header = () => {
  return (
    <header className="header">
      <NavLinks />
    </header>
  );
};

export default Header;
