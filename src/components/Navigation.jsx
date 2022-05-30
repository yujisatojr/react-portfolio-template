import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  return (
    <nav className="navigation">
      <div className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <FontAwesomeIcon icon={isNavExpanded ? faToggleOn : faToggleOff} size="3x"/>
      </div>
      <div className={isNavExpanded ? "nav-bar expanded" : "nav-bar"}>
        <ul>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/">
            Home
            <span className="sr-only">(current)</span>
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/about">
            About
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/blog">
            Blog
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/contact">
            Contact
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;