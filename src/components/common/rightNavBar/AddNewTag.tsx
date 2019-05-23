import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  addNewTags: Function;
}

const AddNewTag = (props: Props) => {
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);

  const onChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const addNewTags = (e: React.SyntheticEvent) => {
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
