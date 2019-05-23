import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { tag } from "../../../interfaces/Interfaces";

interface Props {
  tags: Array<tag>;
}

const ListOfTags = (Props: Props) => {
  const tags = Props.tags;

  const listOftags = tags.map(tag => (
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

export default ListOfTags;
