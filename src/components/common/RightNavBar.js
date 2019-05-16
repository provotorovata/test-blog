import React from "react";
import { Nav } from "react-bootstrap";
import { newData } from "../../data/Data";
import { NavLink } from "react-router-dom";

const RightNavBar = () => {
  const listOftags = newData.getTags().map(tag => (
    <NavLink
      key={tag.id}
      to="/posts"
      className="nav-item nav-link"
      style={{ color: "#581845" }}
    >
      {tag.title}
    </NavLink>
  ));

  return (
    <Nav
      activeKey="/"
      className="flex-column justify-content-end"
      style={{ marginBottom: 5 }}
    >
      <div className="navbar-nav">{listOftags}</div>
    </Nav>
  );
};

export default RightNavBar;
