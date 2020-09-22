import React from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";

const UserDashboard = () => {
    const { user: {_id, name, email, role} } = isAuthenticated();
  return <Layout>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <div>role: {role === 1 ? "Admin" : "User"}</div>
  </Layout>;
};
export default UserDashboard;
