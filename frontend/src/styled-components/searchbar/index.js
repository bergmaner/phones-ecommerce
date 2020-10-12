import styled from "styled-components";

export const Container = styled.div`
margin: 20px 0;
width: 100%;
display: flex;
justify-content: center;

`;

export const SearchForm = styled.form`
  position: relative;
  display: inline-block;
  height: 34px;
  width: auto;
  button{
    position: relative;
    top: 0;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    float: left;
    padding: 0 10px;
    outline: none;
    color: #fff;
    border: 1px solid transparent;
    background-color: #965785;
    text-align: center;
    transition: 0.2s all ease-in-out;
    border-radius: 3px;

    &:hover {
      background-color: #854674;
    }
  }
`;

export const SearchLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid #999;
  z-index: 2;
  border-radius: 3px;
  transition: 250ms all ease-in-out;
`;

export const SearchInput = styled.input`
  outline: none;
  position: relative;
  top: 0;
  display: inline-block;
  height: 34px;
  width: 250px;
  float: left;
  border: 0;
  font-size: 16px;
  z-index: 2;
  box-shadow: none;
  border-radius: 0;
  transition: 250ms all ease-in-out;
  @media(max-width: 399px){
    width: 190px;
  }
`;

export const SearchButton = styled.button`
    height: 34px;
    z-index: 3;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
`;

export const SearchDropdown = styled.div`
    position: relative;
    top: 0;
    display: inline-block;
    float: left;
    box-sizing: border-box;
    height: 100%;
    padding: 3px;
`;

export const DropdownToggle = styled.button`
    font-size: 12px;
    line-height: 28px;
    z-index: 3;
    min-width: 80px;
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    top: calc(100% - 1px);
    display: ${(props) => (props.open ? "block" : "none")};
    margin: 0;
    padding:0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #999;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    z-index: 90;
    transition: 250ms all ease-in-out;

    > li > a {
      display: block;
      padding: 4px 12px;
      color: #000;
      font-size: 14px;
      line-height: 20px;
      text-decoration: none;
      border-radius: 3px - 1;
      transition: 0.2 all ease-in-out;

      &:hover {
        color: #fff;
        background-color: #965785;
      }
    }

    > .active {
      display: none;
    }
`;