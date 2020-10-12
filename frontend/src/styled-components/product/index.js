import styled from "styled-components";

export const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 100%;
  height: 220px;
  transition: 0.5s;
  img {
    position: absolute;
    top: ${(props) => (props.small ? "20%" : "40%")};
    left: 60%;
    transition: 0.5s ease-in-out;
    transform: ${(props) =>
      props.small ? "translate(-40%, -50%)" : "translate(-40%, -60%)"};
    width: ${(props) => (props.small ? "100px" : "270px")};
  }
`;

export const Card = styled.div`
  position: relative;
  color: #000 !important;
  width: 100%;
  height: ${(props) => (props.small ? "300px" : "550px")};
  margin-top: ${(props) => props.isDescription && "40px"};
  margin: ${(props) => props.small && "10px 0 10px 0"};
  background: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #965785;
    clip-path: ${(props) =>
      props.small ? "circle(150px at 80% 0%)" : "circle(150px at 80% 20%)"};
    transition: 0.5s ease-in-out;
    @media (max-width: 672px) {
      clip-path: ${ props => props.small ? "circle(150px at 80% 20%)" : "circle(300px at 80% -20%)"};
    }
  }
  ::after {
    content: "Phonez";
    position: absolute;
    top: 30%;
    left: ${(props) => (props.small ? "-10px" : "-55px")};
    font-size: ${(props) => (props.small ? "3em" : "7em")};
    font-weight: 700;
    font-style: italic;
    color: rgba(255, 255, 255, 0.75);
  }
  :hover:before {
    clip-path: ${(props) =>
      props.small ? "circle(150px at 80% 15%)" : "circle(300px at 80% -20%)"};
    @media (max-width: 672px) {
      clip-path: ${ props => props.small ? "circle(300px at 80% -20%)" : "circle(600px at 80% -60%)" };
    }
  }
  :hover ${ImageContainer} {
    top: 0;
    transform: translateY(0);
    img {
      transform: translate(-50%, -30%);
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: ${props => props.small ? "180px" : "auto"};
  transition: 1s;
  z-index: 5;
  h2 {
    text-align: center;
    margin: 5px;
    font-size: ${(props) => props.small && "16px !important"};
  }
  .title {
    margin-top: ${(props) => props.small && "40px"};
  }

  div {
    padding: 0 10px;
  }
`;

export const BuyContainer = styled.div`
  transform: ${(props) => props.small && "translateY(30px)"};
  display: flex;
  flex-direction: ${(props) => (props.small ? "column-reverse" : "row")};
  justify-content: space-around;
  align-items: center;
`;

export const ProductsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export const FilterHeader = styled.h2`
  position: relative;
  font-size: 18px;
  :after {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #000;
    border-radius: 10px;
  }
`;

export const CategoryList = styled.div`
  position: relative;
  min-width: 230px;
  @media(max-width: 600px){
    width:100%;
  }
  h2{
    margin-top: 0px;
  }
  ul{
  border-radius: 20px;
  margin: 0px 10px 10px 10px;
  min-height: 221px;
  padding: 10px;
  background: #f0f0f0;
  }
  li {
    position: relative;
    list-style-type: none;
    label{
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 5px;
      cursor: pointer;
      user-select: none;
    }
    input {
      position: absolute;
      cursor:pointer;
      opacity: 0;
      :checked ~ span:after {
        display: block;
      }
    }
    span{
   
      position: absolute;
      top: 60%;
      left: 0;
      transform: translateY(-50%);
      height: 15px;
      width: 15px;
      transition: background 0.2s;
      background: #f0f0f0;
      border-radius: 50%;
      :after {
        content: "";
        position: absolute;
        display: none;
         transition: background 0.2s;
        top: 5px;
        left: 5px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: white;
      }
      }
    }
    input ~ span {
      background-color: #fff;
      border: 1px #666 solid;
    }
    input:checked ~ span {
      background-color: #965785;
    }
    
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  @media(max-width: 672px){
    flex-direction: column;
  }
`;

export const RelatedList = styled.div`
  width: 200px !important;
  margin: 0 10px;
  h2 {
    margin: 0 0 10px 0;
    text-align: center;
    font-size: 25px;
  }
  @media(max-width: 672px){
    width: 100% !important;
    margin: 0;
  }
`;

export const RelatedProductsContainer = styled.div`

`;

export const LoadContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductsWrapper= styled.div`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;