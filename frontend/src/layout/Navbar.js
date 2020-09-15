import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding-top: 2.5vw;
  padding-bottom: 2.5vw;
  padding-left: 4vw;
  padding-right: 4vw;
  pointer-events: auto;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div``;

const Account = styled.div`
  text-align: center;
  width: 10%;
  font-size: 14px;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

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
        </NavItems>
        <Account>
          <div>
            <SLink to="/signIn">Sign In</SLink>
          </div>
          <div>
            <SLink to="/signUp">Sign Up</SLink>
          </div>
        </Account>
      </NavContainer>
    </NavWrapper>
  );
};
export default Navbar;
