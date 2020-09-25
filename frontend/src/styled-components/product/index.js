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
    top: 40%;
    left: 60%;
    transition: 0.5s ease-in-out;
    transform: translate(-40%, -60%);
    width: 270px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
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
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
    @media(max-width: 672px){
        clip-path: circle(300px at 80% -20%);
    }
  }
  ::after {
    content: "Phonez";
    position: absolute;
    top: 30%;
    left: -10%;
    font-size: 7em;
    font-weight: 700;
    font-style: italic;
    color: rgba(255, 255, 255, 0.75);
  }
  :hover:before {
    clip-path: circle(300px at 80% -20%);
    @media(max-width: 672px){
        clip-path: circle(600px at 80% -60%);
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
  bottom: -5px;
  width: 100%;
  height: 180px;
  transition: 1s;
  z-index: 5;
  h2 {
    text-align: center;
    margin: 5px;
  }

  div {
    padding: 0 10px;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  justify-content : space-around;
  align-items: center;
`;

export const ProductsList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-auto-rows: auto;
grid-gap: 1rem;
`;