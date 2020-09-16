import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Form, InputContainer, Title, Button } from "../styled-components/form";

const SignForm = () => {
  return (
    <Form>
      <Title>Sign in</Title>
      <InputContainer>
        <FaUser />
        <input type="text" placeholder="Username" />
      </InputContainer>
      <InputContainer>
        <FaLock />
        <input type="password" placeholder="Password" />
      </InputContainer>
      <Button>Login</Button>
    </Form>
  );
};
export default SignForm;
