import React from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import { useHistory } from "react-router-dom";
import { Content, Details, Navigation } from "../styled-components/dashboard";
import { Container } from "../styled-components/reusable";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  let history = useHistory();
  return (
    <Layout>
      <Container>
        <Content>
          <Details>
              <h2>Details</h2>
            <span>name: {name}</span>
            <span>email: {email}</span>
            <span>role: {role === 1 ? "Admin" : "User"}</span>
          </Details>
        </Content>
        <Navigation>
          <li onClick={() => history.push("/create/category")}>Create Category</li>
          <li onClick={() => history.push("/create/product")}>Create Product</li>
          <li onClick={() => history.push("/orders")}>Orders</li>
          <li onClick={() => history.push("/manage/products")}>Manage Products</li>
        </Navigation>
      </Container>
    </Layout>
  );
};
export default AdminDashboard;
