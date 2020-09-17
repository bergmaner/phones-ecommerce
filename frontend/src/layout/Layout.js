import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
