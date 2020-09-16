import styled from "styled-components";

export const FormsContainer = styled.div`
position: absolute;
top: 50%;
left: 75%;
transform: translate(-50%, -50%);
width 50%;
display: grid;
grid-template-columns: 1fr
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
  z-index: ${props => props.visible ? 2 : 1};
  opacity: ${props => props.visible ? 1: 0};
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
  border: none;
  border-radius: 49px;
  cursor: pointer;
  background: #743563;
  margin: 10px 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s;
  :hover{
    background: #ee9944;
  }
`;
