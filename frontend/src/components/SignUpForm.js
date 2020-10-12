import React, { useState } from "react";
import { Form, InputContainer,Title, Information, Button } from "../styled-components/reusable";
import { signup } from "../helpers/auth";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const SignUpForm = ({ signUp }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value, error: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ name, email, password }).then((data) => {
      if (data.error)
        setValues({ ...values, error: data.error, success: false });
      else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  console.log(values);
  return (
    <Form onSubmit={handleSubmit} visible={signUp}>
      <Title>Sign up</Title>
      <InputContainer>
        <FaUser />
        <input
          onChange={handleChange("name")}
          type="text"
          placeholder="Username"
          value={name}
        />
      </InputContainer>
      <InputContainer>
        <FaEnvelope />
        <input
          onChange={handleChange("email")}
          type="email"
          placeholder="Email"
          value={email}
        />
      </InputContainer>
      <InputContainer>
        <FaLock />
        <input
          onChange={handleChange("password")}
          type="password"
          placeholder="Password"
          value={password}
        />
      </InputContainer>
      <Information success={success}>
        {success ? "You Signed Up succesfully.Go Sign In" : error}
      </Information>
      <Button>Register</Button>
    </Form>
  );
};
export default SignUpForm;
