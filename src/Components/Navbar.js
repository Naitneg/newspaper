import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav">
      <ul className="menu">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      <input className="searchbox" type="search" placeholder="search news" />
    </div>
  );
}

export default Navbar;
