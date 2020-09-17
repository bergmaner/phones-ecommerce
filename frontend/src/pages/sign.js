import React, { useState } from "react";
import Layout from "../layout/Layout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import SignContent from "../components/SignContent";
import { SignForm, FormsContainer, Container } from "../styled-components/sign";

const Sign = () => {
  const [signUp, setSignUp] = useState(false);
  console.log(signUp)
  return (
    <Layout>
      <Container transform={signUp}>
        <FormsContainer>
          <SignForm visible={signUp}>
            <SignInForm signUp={signUp} />
            <SignUpForm signUp={signUp} />
          </SignForm>
        </FormsContainer>
        <SignContent signUp={signUp} setSignUp={setSignUp} />
      </Container>
    </Layout>
  );
};
export default Sign;
