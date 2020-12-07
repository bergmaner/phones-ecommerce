import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 65px);
  padding-bottom: 20px;

`;

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Navbar />
      <Container>
      {children}
      </Container>
      <Footer />
    </div>
  );
};
export default Layout;
