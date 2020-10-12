import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import {
  InputContainer,
  Container,
  Button,
  FormCenter,
} from "../styled-components/reusable";
import { read, update, updateUser } from "../helpers/api";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { user, token } = isAuthenticated();
  const { userId } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(userId, token, { name, email, password }).then((data) => {
      if (data.error) console.log(data.error);
      else
        updateUser(data, () => {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            success: true,
          });
        });
    });
  };

  useEffect(() => {
    read(userId, token).then((data) => {
        if (data.error) {
          setValues({ ...values, error: true });
        } else {
          setValues({ ...values, name: data.name, email: data.email });
        }
      });
  }, []);

  return (
    <Layout>
      <Container flexCenter>
        <h1>Update Profile</h1>
        <FormCenter onSubmit={handleSubmit}>
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
          <Button>Submit</Button>
        </FormCenter>
      </Container>
    </Layout>
  );
};

export default Profile;
