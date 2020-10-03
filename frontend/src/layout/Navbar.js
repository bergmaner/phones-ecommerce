import React from "react";
import {
  SLink,
  NavContainer,
  NavWrapper,
  CartContainer,
  CartNumber,
  NavItems,
  Title,
  Account,
  Signout,
} from "../styled-components/navbar";
import { MdShoppingCart } from "react-icons/md";
import { getTotalItems } from "../helpers/cart";
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
          {isAuthenticated()?.user?.role === 1 && (
            <SLink to="/dashboard/admin">Dashboard</SLink>
          )}
          {isAuthenticated()?.user?.role === 0 && (
            <SLink to="/dashboard/user">Dashboard</SLink>
          )}
          <SLink to="/contact">Contact</SLink>
          <Account>
            {!isAuthenticated() ? (
              <>
                <SLink to="/cart">
                  <CartContainer>
                    <MdShoppingCart />
                    {getTotalItems() !== 0 && (
                      <CartNumber>{getTotalItems()}</CartNumber>
                    )}
                  </CartContainer>
                </SLink>
                <SLink to="/signin-or-signup">Sign In | </SLink>
                <SLink to="/signin-or-signup">Sign Up</SLink>
              </>
            ) : (
              <>
                <MdShoppingCart />
                {getTotalItems() !== 0 && (
                  <CartNumber>{getTotalItems()}</CartNumber>
                )}
                <Signout
                  onClick={() =>
                    signout(() => history.push("/signin-or-signup"))
                  }
                >
                  Sign Out
                </Signout>
              </>
            )}
          </Account>
        </NavItems>
      </NavContainer>
    </NavWrapper>
  );
};
export default Navbar;
