import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Form, InputContainer, Title, Button } from "../styled-components/sign";

const SignInForm = () => {
  return (
    <Form visible>
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
export default SignInForm;
