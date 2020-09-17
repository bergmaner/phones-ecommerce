import React from "react";
import { FaUser, FaLock,FaEnvelope } from "react-icons/fa";
import { Form, InputContainer, Title, Button } from "../styled-components/sign";

const SignUpForm = ({signUp}) => {
  return (
    <Form visible={signUp}>
      <Title>Sign up</Title>
      <InputContainer>
        <FaUser />
        <input type="text" placeholder="Username" />
      </InputContainer>
      <InputContainer>
        <FaEnvelope/>
        <input type="email" placeholder="Email" />
      </InputContainer>
      <InputContainer>
        <FaLock />
        <input type="password" placeholder="Password" />
      </InputContainer>
      <Button>Login</Button>
    </Form>
  );
};
export default SignUpForm;
