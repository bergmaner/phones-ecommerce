import React from "react";
import Content from "./Content";
import { SignContents } from "../styled-components/sign";

const SignContent = ({ signUp, setSignUp }) => {
  return (
    <SignContents>
      <Content
        title="New here ?"
        description="Join to us! If you don't have an account go Sign Up."
        direction="left"
        option="Sign up"
        signUp={signUp}
        setSignUp={setSignUp}
      />
      <Content
        title="Do you have an account ?"
        description="if you have an account go Sign In."
        direction="right"
        option="Sign in"
        signUp={signUp}
        setSignUp={setSignUp}
      />
    </SignContents>
  );
};
export default SignContent;
