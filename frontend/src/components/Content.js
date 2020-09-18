import React from "react";
import {
  Button,
  ContentContainer,
  ContentWrapper,
} from "../styled-components/sign/index";
import Login from "./Login";
import Register from "./Register";
import { animateScroll as scroll } from "react-scroll";

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
    option === "Sign up" ? 
    scroll.scrollToTop() : scroll.scrollToBottom({
      duration: 2000});
  };

  return (
    <ContentWrapper transform={signUp ? 1 : 0} direction={direction}>
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
