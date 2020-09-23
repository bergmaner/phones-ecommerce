import styled from "styled-components";

export const Navigation = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    width: 33%;
    list-style-type: none;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    background: #965785;
    color: #fff;
    border-radius: 50px;
    margin: 5px 0;
    transition: 0.25s ease;
    :hover{
        cursor: pointer;
        background: #743563;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const Details = styled.div`
 text-align: left;
 h2{
     margin: 5px 0;
     font-size: 30px;
 }
 span{
     margin: 5px;
     padding: 10px 0;
     display: block;
     font-size: 20px;
 }
`;
