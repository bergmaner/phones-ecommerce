import React from "react";
import Layout from "../layout/Layout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { FormsContainer } from "../styled-components/form";

const Sign = () => {
  return (
    <Layout>
      <FormsContainer>
        <SignInForm />
        <SignUpForm />
      </FormsContainer>
    </Layout>
  );
};
export default Sign;
