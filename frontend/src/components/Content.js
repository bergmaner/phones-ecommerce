import React from "react";
import { Button,ContentContainer, ContentWrapper } from "../styled-components/sign/index";

const Content = ({direction}) =>{
    return(
        <ContentWrapper direction={direction}>
          <ContentContainer >
            <h3>New here ?</h3>
            <p>
              Join to us! If you don't have an account go Sign Up.
            </p>
            <Button transparent>
              Sign up
            </Button>
          </ContentContainer>
          <img src={require("../assets/images/register.svg")} alt="" />
        </ContentWrapper>
    )
}
export default Content;