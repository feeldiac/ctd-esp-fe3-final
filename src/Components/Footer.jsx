import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Footer = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <footer className={theme === "dark" ? "dark-mode" : ""}>
      <p>Made with 💙 by efedi</p>
      <p>Frontend III final project at Digital House</p>
    </footer>
  );
};

export default Footer;
