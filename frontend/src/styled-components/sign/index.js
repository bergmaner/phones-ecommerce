import styled from "styled-components";

export const SignForm = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #743563 0%, #743563 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
  }
`;

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 0 5rem;
  grid-column: 1/2;
  grid-row: 1/2;
  z-index: ${(props) => (props.visible ? 2 : 1)};
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

export const InputContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0.4rem;
  svg {
    margin: auto;
    color: #555;
    font-size: 1.5rem;
  }

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    color: #555;
    ::placeholder {
      color: #aaa;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #555;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 49px;
  outline: none;
  border: ${(props) => (props.transparent ? "2px solid white" : "none")};
  border-radius: 49px;
  cursor: pointer;
  background: #743563;
  margin: 10px 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s;
  :hover {
    background: #ee9944;
  }
`;

export const ContentContainer = styled.div`
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
  h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
  pointer-events: ${(props) => (props.direction === "left" ? "all" : "none")};
  padding: ${(props) =>
    props.direction === "left" ? "3rem 17% 2rem 12%" : "3rem 12% 2rem 17%"};

    ${ContentContainer}{
      transform: ${props => props.direction === "left" ? "translateX(0)" : "translateX(800px)"};
    }

  img {
    width: 100%;
    transform: ${props => props.direction === "left" ? "translateX(0)" : "translateX(800px)"};
  }
`;



export const SignContents = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
