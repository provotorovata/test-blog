import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavigation = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About me
      </NavLink>
    </nav>
  );
};

export default HeaderNavigation;
