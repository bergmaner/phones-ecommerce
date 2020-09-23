import styled from "styled-components";

export const SignForm = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${(props) => (props.visible ? "25%" : "75%")};
  width: 50%;
  transition: 1.3s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  @media (max-width: 849px) {
    width: 100%;
    left: 50%;
    top: ${(props) => (props.visible ? "5%" : "95%")};
    transform: ${(props) =>
      props.visible ? "translate(-50%, 0)" : "translate(-50%, -100%)"};
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  @media (max-width: 849px) {
    min-height: 800px;
    height: 100vh;
  }
  ::before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    z-index: 6;
    right: ${(props) => (props.transform ? "52%" : "48%")};
    transform: ${(props) =>
      props.transform ? "translate(100%, -50%)" : "translateY(-50%)"};
    background-image: linear-gradient(-45deg, #965785 0%, #965785 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    @media (max-width: 849px) {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: ${(props) => (props.transform ? "32%" : "68%")};
      transform: ${(props) =>
        props.transform ? "translate(-50%, 100%)" : "translateX(-50%)"};
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
  }
`;

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
  z-index: 6;
  h3 {
    margin: 40px 0 10px 0;
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
    margin: 10px 0;
  }
  @media (max-width: 559px) {
    padding: 0 !important;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  padding: ${(props) =>
    props.direction === "left" ? "3rem 17% 2rem 12%" : "3rem 12% 2rem 17%"};
  ${ContentContainer}, svg {
    transform: ${(props) =>
      props.direction === "left"
        ? props.transform
          ? "translateX(-800px)"
          : "translateX(0)"
        : props.transform
        ? "translateX(0)"
        : "translateX(800px)"};
  }

  svg {
    width: 300px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
    z-index: 6;
    margin: auto;
    @media (max-width: 559px) {
      display: none;
    }
  }
  @media (max-width: 849px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-row: ${(props) => (props.direction === "left" ? "1/2" : "3/4")};
    ${ContentContainer} {
      padding-right: 15%;
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
        padding: 0.5rem 0;
      }
    }
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
  @media (max-width: 849px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;
