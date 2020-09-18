import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  position: relative;
  z-index: 7;
  width: 100%;
  box-sizing: border-box;
  padding: 2.5vw 4vw;
  pointer-events: auto;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div``;

export const Account = styled.div`
  text-align: center;
  font-size: 14px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
`;
