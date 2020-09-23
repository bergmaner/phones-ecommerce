import React from "react";
import {
  SLink,
  NavContainer,
  NavWrapper,
  NavItems,
  Title,
  Account,
  Signout
} from "../styled-components/navbar";
import { signout, isAuthenticated } from "../helpers/auth";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  console.log(history);



  return (
    <NavWrapper>
      <NavContainer>
        <NavItems>
          <Title>
            <SLink to="/">Phonez</SLink>
          </Title>
          <SLink to="/products">Products</SLink>
         {isAuthenticated()?.user?.role === 1 &&<SLink to="/dashboard/admin">Dashboard</SLink>}
         {isAuthenticated()?.user?.role === 0 &&<SLink to="/dashboard/user">Dashboard</SLink>}
          <SLink to="/contact">Contact</SLink>

          {!isAuthenticated() ? (
            <Account>
              <SLink to="/signin-or-signup">Sign In | </SLink>
              <SLink to="/signin-or-signup">Sign Up</SLink>
            </Account>
          ) : (
            <Signout onClick={() => signout(() => history.push("/signin-or-signup"))}>Sign Out</Signout>
          )}
        </NavItems>
      </NavContainer>
    </NavWrapper>
  );
};
export default Navbar;
