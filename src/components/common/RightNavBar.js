import React, { useState } from "react";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { newData } from "../../data/Data";
import { NavLink } from "react-router-dom";

const RightNavBar = () => {
  const [tags, setTags] = useState(newData.getTags());

  const textInput = React.createRef();

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

  const addNewTags = event => {
    event.preventDefault();
    console.log(newData.getTags());

    setTags(newData.addNewTags(textInput.current.value));
    textInput.current.value = "";
    console.log(tags);
  };

  return (
    <React.Fragment>
      <Nav
        activeKey="/"
        className="flex-column justify-content-end"
        style={{ marginBottom: 5 }}
      >
        <div className="navbar-nav">{listOftags}</div>
      </Nav>
      <Form onSubmit={addNewTags}>
        <FormControl
          type="text"
          placeholder="Введите название тега"
          className=" mr-sm-2"
          ref={textInput}
          style={{ marginBottom: 5 }}
        />
        <Button variant="outline-primary" size="sm" type="submit">
          Создать новый тег
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default RightNavBar;
