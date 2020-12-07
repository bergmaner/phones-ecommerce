import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    background:#303036;
    color: #d3d3d3;
    height: 400px;
    padding-bottom: 50px;
    width: 100%;
    position: relative;
    bottom:0;
    @media(max-width: 672px){
        height:auto;
        }
`;
export const Copyright = styled.div`
    background: #303036;
    color: #686868;
    height: 50px;
    text-align: center;
    position: absolute;
    bottom:0;
    left: 0;
    padding-top: 20px;
    width: 100%;
    border-top: #d3d3d3 solid 1px;
`;

export const FooterItems = styled.div`
display:flex;
flex-wrap:wrap;
height:100%;
`;

export const Column = styled.div`
flex: 1;
margin: 40px 8px;
display: flex;
flex-direction: column;
`;

export const ColumnContent = styled.div`
flex: 1;
`;

export const Content = styled.div`
height: calc(100% - 70px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


export const Logo = styled.h1`
margin:0;
font-weight: 700;
font-style: italic;
color:#d3d3d3;;
text-align:center;

`;

export const Header = styled.h3`
    color: #965785;
    text-align:center;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  display:inline-block;
  padding: 10px;
  color: #d3d3d3;
  font-weight: 700;`;

  export const ContactContainer = styled.div`
  padding: 10px;
  display: flex;
  svg{
      padding-right: 5px;
      font-size: 25px;
  }
  
  `;

  export const ContactsContainer = styled.div`

    

  `;

  export const Social = styled.div`
  padding-top: 5px;
    display: flex;
    justify-content: center;
  `;

  export const SocialIcon = styled.span`
  flex:1;
  text-align: center;
   svg{
  
    font-size: 25px;
    :hover{
        color: ${props => props.color};
        cursor: pointer;
    }
   }
  `;