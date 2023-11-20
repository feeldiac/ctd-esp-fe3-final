import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "../assets";
import { GlobalContext } from "../contexts/GlobalContext";

const Navbar = () => {
  const { theme, darken, lighten } = useContext(GlobalContext);
  const toggleTheme = () => (theme === "light" ? darken() : lighten());

  return (
    <nav className={theme === "dark" && "dark-mode"}>
      <h1 className="logo">Pearly White Hub</h1>
      <div className="nav-items">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-link">
            <Link to="/favs">Favorites</Link>
          </li>
        </ul>
        <span className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon fill="palevioletred" />
          ) : (
            <Sun fill="white" />
          )}
          {/* <img
            src={theme === "light" ? iconSun : iconMoon}
            alt="toggle-theme"
          /> */}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
