import React from "react";
import Layout from "../layout/Layout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import SignContent from "../components/SignContent";
import { SignForm, FormsContainer, Container } from "../styled-components/sign";

const Sign = () => {
  return (
    <Layout>
      <Container>
        <FormsContainer>
          <SignForm>
            <SignInForm />
            <SignUpForm />
          </SignForm>
        </FormsContainer>
        <SignContent/>
      </Container>
    </Layout>
  );
};
export default Sign;
