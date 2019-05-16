import React, { useState } from "react";
import { Form, FormControl, Button, FormGroup } from "react-bootstrap";
import { newData } from "../../data/Data";

const AddNewTag = () => {
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);

  const onChange = e => setValue(e.target.value);

  const addNewTags = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      //вызвать функцию обновления тегов
      console.log("exsecute setTag function");
      setValue("");
      setValidated(true);
    }

    // e.preventDefault();
    // console.log(newData.getTags());
    // setTags(newData.addNewTags(textInput.current.value));
    // textInput.current.value = "";
    // console.log(tags);
  };

  return (
    <Form noValidate validated={validated} onSubmit={addNewTags}>
      <FormGroup controlId="validationInputTag">
        <FormControl
          required
          type="text"
          placeholder="Введите название тега"
          className=" mr-sm-2"
          onChange={onChange}
          style={{ marginBottom: 5 }}
          value={value}
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста, введите имя тега
        </Form.Control.Feedback>
      </FormGroup>
      <Button variant="outline-primary" size="sm" type="submit">
        Создать новый тег
      </Button>
    </Form>
  );
};

export default AddNewTag;
