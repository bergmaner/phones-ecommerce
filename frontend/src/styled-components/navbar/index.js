import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  position: relative;
  z-index: 7;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  pointer-events: auto;
  @media(max-width: 672px){
   padding: 40px 0;
    }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Signout = styled.div`
  cursor: pointer;
  font-weight: 700;
  @media(max-width: 672px){
  width: 50px;
    }
`;

export const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
  @media(max-width: 672px){
    display:flex;
    opacity: ${props => props.switchOn ? "1" : "0"};
    height:${props => props.switchOn ? "auto" : "0px"};
    transform:${props => props.switchOn ? "translateY(0)" : "translateY(-300px)"};
    transition: 0.5s ease transform,0.5s ease opacity, 0.5s ease height;
    flex-direction: column;
    background: #fefefe;
    border-bottom: 2px solid #eee;
    }
`;

export const TitleLink = styled(Link)`
font-weight: 700;
font-style: italic;
color:#000;
text-decoration: none;
 @media(max-width: 672px){
    padding: 10px;
    width: 100% !important;
    text-align:center;
    border-bottom: 2px solid #eee;
    }

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

export const Menu = styled.span`
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
  display:none;
  cursor:pointer;
  svg {
    margin: 0 10px;
    font-size: 25px;
  }
  @media(max-width: 672px){
    position: absolute;
    right: 0;
    top: 10px;
    display: block;
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
  @media(max-width: 672px){
    padding: 10px;
    width: 100% !important;
    text-align:center;
    border-bottom: 2px solid #eee;
    }
`;

export const CartLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  @media(max-width: 672px){
    padding: 10px;
    }
`;