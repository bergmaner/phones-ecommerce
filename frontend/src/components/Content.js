import React from "react";
import {
  Button,
  ContentContainer,
  ContentWrapper,
} from "../styled-components/sign/index";
import Login from "./Login";
import Register from "./Register";

const Content = ({
  direction,
  title,
  description,
  option,
  signUp,
  setSignUp,
}) => {
  const handleChangeSign = () => {
    option === "Sign up" ? setSignUp(true) : setSignUp(false);
  };

  return (
    <ContentWrapper transform={signUp} direction={direction}>
      <ContentContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={() => handleChangeSign()} transparent>
          {option}
        </Button>
      </ContentContainer>
      {option === "Sign up" ? <Register /> : <Login />}
    </ContentWrapper>
  );
};
export default Content;
