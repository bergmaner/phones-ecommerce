import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  position: relative;
  z-index: 7;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  pointer-events: auto;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Signout = styled.div`
  cursor: pointer;
  font-weight: 700;
`;

export const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
font-weight: 700;
font-style: italic;
`;

export const CartContainer = styled.span`
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
  svg {
    margin: 0 10px;
    font-size: 25px;
  }
`;

export const CartNumber = styled.span`
top: 2px;
left: 10px;
transform: scale(1) translate(50%, -50%);
transform-origin: 100% 0%;
height: 20px;
    display: flex;
    padding: 0 6px;
    z-index: 1;
    position: absolute;
    background: #965785;
    color: #fff;
    flex-wrap: wrap;
    font-size: 0.75rem;
    min-width: 20px;
    box-sizing: border-box;
    align-items: center;
    font-weight: 500;
    line-height: 1;
    align-content: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;

`;

export const Account = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;

`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
`;
