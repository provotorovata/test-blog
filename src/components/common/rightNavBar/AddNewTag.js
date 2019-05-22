import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddNewTag = props => {
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);

  const onChange = e => {
    setValue(e.target.value);
  };

  const addNewTags = e => {
    e.preventDefault();
    if (value) {
      props.addNewTags(value);
      setValue("");
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  return (
    <Form onSubmit={addNewTags}>
      <input
        type="text"
        placeholder="Введите название тега"
        onChange={onChange}
        style={{ marginBottom: 5 }}
        value={value}
      />
      {validated ? <div>Пожалуйста, введите имя тега</div> : null}
      <Button variant="outline-primary" size="sm" type="submit">
        Создать новый тег
      </Button>
    </Form>
  );
};

export default AddNewTag;
