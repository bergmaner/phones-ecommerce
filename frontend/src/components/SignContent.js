import React from "react";
import Content from "./Content";
import { SignContents } from "../styled-components/sign";

const SignContent = () =>{
    return(
        <SignContents>
            <Content direction="left"/>
            <Content direction="right"/>
      </SignContents>
    )
}
export default SignContent;