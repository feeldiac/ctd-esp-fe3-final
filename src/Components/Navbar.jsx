import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "../assets";
import { GlobalContext } from "../contexts/GlobalContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, darken, lighten } = useContext(GlobalContext);
  const toggleTheme = () => (theme === "light" ? darken() : lighten());

  return (
    <nav>
      <h1 className="logo" role="button" onClick={() => navigate("/")}>
        🦷 Pearly White Hub
      </h1>
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
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
