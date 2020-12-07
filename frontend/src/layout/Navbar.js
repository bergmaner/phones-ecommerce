import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  SLink,
  CartLink,
  TitleLink,
  NavContainer,
  NavWrapper,
  CartContainer,
  CartNumber,
  NavItems,
  Account,
  Signout,
  Menu
} from "../styled-components/navbar";
import { MdShoppingCart, MdMenu } from "react-icons/md";
import { getTotalItems } from "../helpers/cart";
import { signout, isAuthenticated } from "../helpers/auth";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const [switchOn, setSwitchOn] = useState(false);
  console.log(switchOn);
  return (
    <NavWrapper>
      <NavContainer>
        <NavItems switchOn = {switchOn}>
            <TitleLink to="/">Phonez</TitleLink>
          <SLink to="/products">Products</SLink>
          {isAuthenticated()?.user?.role === 1 && (
            <SLink to="/dashboard/admin">Dashboard</SLink>
          )}
          {isAuthenticated()?.user?.role === 0 && (
            <SLink to="/dashboard/user">Dashboard</SLink>
          )}
          <SLink to="#footer">Contact</SLink>
          <Account>
            {!isAuthenticated() ? (
              <>
                <CartLink to="/cart">
                  <CartContainer>
                    <MdShoppingCart />
                    {getTotalItems() !== 0 && (
                      <CartNumber>{getTotalItems()}</CartNumber>
                    )}
                  </CartContainer>
                </CartLink>
                <SLink to="/signin-or-signup">Sign In | </SLink>
                <SLink to="/signin-or-signup">Sign Up</SLink>
              </>
            ) : (
              <>
              <CartLink to="/cart">
               <CartContainer>
                    <MdShoppingCart />
                    {getTotalItems() !== 0 && (
                      <CartNumber>{getTotalItems()}</CartNumber>
                    )}
                  </CartContainer>
                  </CartLink>
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
        <Menu onClick={() => setSwitchOn(!switchOn)}>
        <MdMenu/>
        </Menu>
      </NavContainer>
    </NavWrapper>
  );
};
export default Navbar;
