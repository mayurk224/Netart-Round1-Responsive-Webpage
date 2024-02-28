import React from "react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Company Logo" />
    </header>
  );
}

export default Header;
