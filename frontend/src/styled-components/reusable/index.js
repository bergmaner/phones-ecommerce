import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #555;
  margin: 10px 0 ;
  text-align: center;
`;

export const Information = styled.div`
  color: ${(props) => (props.success ? "#0e6b0e !important" : "#f44336")};
  font-weight: 600;
  min-height: 21px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-height: calc(100vh - 61px);
`;

export const Row = styled.div`
min-width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 849px) {
    flex-direction: column;
    min-width: 0;
    width:100%;
  }
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
  transition: 1s 0.7s ease-in-out;
  transition-delay: 0.6s;
  z-index: ${(props) => (props.visible ? 2 : 1)};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  @media (max-width: 559px) {
    padding: 0 1.5rem;
  }
`;

export const InputContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: ${(props) => (props.noIco ? "100%" : "15% 85%")};
  padding: 0.4rem;
  svg {
    margin: auto;
    color: #555;
    font-size: 1.5rem;
  }

  select {
    width: calc(100% - 10px);
    padding-left: 57px;
    option {
      background: #f0f0f0;
      border: none;
      outline: none;
    }
  }

  input,
  select {
    margin: auto 0;
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-size: 20px;
    font-weight: 600;
    color: #555;
    ::placeholder {
      color: #aaa;
    }
  }
`;
export const Button = styled.button`
  width: 150px;
  height: 49px;
  outline: none;
  border: ${(props) => (props.transparent ? "2px solid white" : "none")};
  border-radius: 49px;
  cursor: pointer;
  background: #965785;
  margin: 10px 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s;
  :hover {
    background: #ee9944;
  }
  @media (max-width: 849px) {
    width: ${(props) => props.transparent && "110px"};
    height: ${(props) => props.transparent && "35px"};
    font-size: ${(props) => props.transparent && "0.75rem"};
  }
`;
