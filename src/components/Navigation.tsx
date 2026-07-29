import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { resumeConfig } from "./Resume";
import "../assets/styles/Navigation.scss";

type NavItem = {
  label: string;
  to?: string;
  href?: string;
};

const navItems: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Articles", to: "/articles" },
  { label: "Reading", to: "/reading" },
  { label: "Contact", to: "/contact" },
  { label: resumeConfig.label, href: resumeConfig.url },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <NavLink className="site-name" to="/" onClick={closeMenu}>
          SK
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          Menu
        </button>
        <nav
          id="primary-navigation"
          className={`menu ${mobileOpen ? "open" : ""}`}
          aria-label="Primary"
        >
          {navItems.map((item) =>
            item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to as string}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
