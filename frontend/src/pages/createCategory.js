import React, { useState } from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import { ImPriceTag } from "react-icons/im";
import {
  Form,
  InputContainer,
  Information,
  Container,
  Title,
  Button,
} from "../styled-components/reusable";
import { createCategory } from "../helpers/api";

const CreateCategory = () => {
  const [values, setValues] = useState({
    name: "",
    error: "",
    success: false,
  });
  const { name, error, success } = values;
  const { user, token } = isAuthenticated();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "", success: false });
    createCategory(user, token, { name }).then((data) => {
      if (data.error)
        setValues({ ...values, error: "Category should be unique", success: false });
      else setValues({ ...values, error: "", success: true });
    });
  };
  console.log(user);
  return (
    <Layout>
      <Container>
        <Title>Create Category</Title>
        <Form onSubmit={handleSubmit} visible={true}>
          <InputContainer>
            <ImPriceTag/>
            <input
              value={name}
              placeholder="category"
              required={true}
              onChange={(e) =>
                setValues({
                  ...values,
                  name: e.target.value,
                  error: "",
                  success: false,
                })
              }
            />
          </InputContainer>
          <Information success={success}>
            {success ? `Category "${name}" is created succesfully ` : error}
          </Information>
          <Button>Add Category</Button>
        </Form>
      </Container>
    </Layout>
  );
};
export default CreateCategory;
