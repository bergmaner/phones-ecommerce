import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Form, InputContainer, Title, Button } from "../styled-components/sign";

const handleClick = (e) =>{
  e.preventDefault();
  console.log("kk")
}

const SignInForm = ({signUp}) => {
  return (
    <Form onSubmit={handleClick} visible={!signUp}>
      <Title>Sign in</Title>
      <InputContainer>
        <FaUser />
        <input type="text" placeholder="Username" />
      </InputContainer>
      <InputContainer>
        <FaLock />
        <input type="password" placeholder="Password" />
      </InputContainer>
      <Button type="submit">Login</Button>
    </Form>
  );
};
export default SignInForm;
