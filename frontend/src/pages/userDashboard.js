import React from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import { useHistory } from "react-router-dom";
import { Content, Details, Navigation } from "../styled-components/dashboard";
import { Container } from "../styled-components/reusable";


const UserDashboard = () => {

  const {
    user: { _id, name, email, role },token
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
          <li onClick={() => history.push(`/profile/${_id}`)}>
            Update Profile
          </li>
          <li onClick={() => history.push(`/orders`)}>
            Orders
          </li>
        </Navigation>
      </Container>
    </Layout>
  );
};
export default UserDashboard;
