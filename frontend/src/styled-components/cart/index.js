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
  @media(max-width: 499px){
    font-size: 0.7rem;
  }
`;

export const NameWrapper = styled.h5`
  width: 125px;
  text-align: center;
  @media(max-width: 499px){
    width: 70px;
  }
`;

export const Count = styled.span`
height: 20px;
    display: flex;
    padding: 0 6px;
    z-index: 1;
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

export const BuyContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 3.2rem);
    :before{
      content: "";
      position: absolute;
      top: 0;
      left: -1.6rem;
      margin: auto;
      width: calc(100% + 1.6rem);
      height: .5px;
      background: #e1e1e1;
    }
    p{
      margin: 0;
      @media(max-width: 499px){
        font-size: 0.85rem;
      }
    }
    h2{
      margin:  5px 0;
      @media(max-width: 499px){
        font-size: 1rem;
      }
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;