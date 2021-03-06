import React, { useState } from "react";
import Header from "./Header1/Header";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";
import "../styles/global.css";

const TemplateWrapper = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("toggle", !menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <NavigationDrawer open={menuOpen} toggleMenu={toggleMenu} />
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
