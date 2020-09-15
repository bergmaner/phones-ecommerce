import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Navbar />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};
export default Layout;
