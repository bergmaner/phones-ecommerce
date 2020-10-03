import styled from "styled-components";

export const Small = styled.small`
  font-size: 0.7rem;
  font-weight: 500;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  margin-bottom: 1.2rem;
`;

export const ControlsContainer = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControlButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 5px;
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px solid #e1e1e1;
  background: transparent;
  text-transform: none;
  overflow: visible;
  line-height: 1.15;
  outline: none;
  margin: 0;
`;

export const ImageContainer = styled.div`
  width: 40px;
  height: 60px;
  width: 60px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const CartList = styled.div`
padding: 0 1.6rem;
height: 100%;
display: flex;
flex-direction: column;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem;
`;
