import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  Form,
  InputContainer,
  Title,
  Button,
  Information,
} from "../styled-components/sign";
import { authenticate, signin, isAuthenticated } from "../helpers/auth";

const SignInForm = ({ signUp }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirect: false,
  });
  let history = useHistory();
  const { user } = isAuthenticated();
  const { email, password, error, loading, redirect } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value, error: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signin({ email, password }).then((data) => {
      if (data.error)
        setValues({
          ...values,
          error: data.error,
          loading: true,
          redirect: false,
        });
      else {
        authenticate(data, () => setValues({ ...values, redirect: true }));
      }
    });
  };

  const redirectUser = () => {
    if (redirect) {
      if (user && user.role === 1) {
        return <Redirect to="/dashboard/admin" />;
      } else return <Redirect to="/dashboard/user" />;
    }
    if (isAuthenticated()) {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit} visible={!signUp}>
      <Title>Sign in</Title>
      <InputContainer>
        <FaUser />
        <input
          onChange={handleChange("email")}
          type="text"
          placeholder="Username"
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
      <Information succes={!error}>{error}</Information>
      {redirectUser(user)}
      <Button type="submit">Login</Button>
    </Form>
  );
};
export default SignInForm;
