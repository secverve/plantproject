import React, { useState } from "react";
import "./TopNav.css";
import { GiGroundSprout } from "react-icons/gi";

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="TopNav">
        <div className="logo-container">
          <GiGroundSprout size="45" />
        </div>
        <div className="menu-container">
          <button className="menu-btn" onClick={toggleMenu}>
            <span>Menu</span>
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.4 7h15.2c.4 0 .8-.4.8-.8s-.4-.8-.8-.8H4.4c-.4 0-.8.4-.8.8s.4.8.8.8zm15.2 6.2H4.4c-.4 0-.8.4-.8.8s.4.8.8.8h15.2c.4 0 .8-.4.8-.8s-.4-.8-.8-.8zm0 5.6H4.4c-.4 0-.8.4-.8.8s.4.8.8.8h15.2c.4 0 .8-.4.8-.8s-.4-.8-.8-.8z"
              ></path>
            </svg>
          </button>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
