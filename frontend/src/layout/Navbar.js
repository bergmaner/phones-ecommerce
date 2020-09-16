import React from "react";
import {
  SLink,
  NavContainer,
  NavWrapper,
  NavItems,
  Title,
  Account,
} from "../styled-components/navbar";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <NavItems>
          <Title>
            <SLink to="/">Phonez</SLink>
          </Title>
          <SLink to="/products">Products</SLink>
          <SLink to="/informations">Informations</SLink>
          <SLink to="/contact">Contact</SLink>
          <Account>
            <SLink to="/signin-or-signup">Sign In | </SLink>
            <SLink to="/signin-or-signup">Sign Up</SLink>
          </Account>
        </NavItems>
      </NavContainer>
    </NavWrapper>
  );
};
export default Navbar;
