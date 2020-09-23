import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign from "./pages/sign";
import Home from "./pages/home";
import UserDashboard from "./pages/userDashboard";
import AdminDashboard from "./pages/adminDashboard";
import CreateCategory from "./pages/createCategory";
import CreateProduct from "./pages/createProduct";
import { PrivateRoute, AdminRoute } from "./helpers/auth";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin-or-signup" component={Sign}/>
        <AdminRoute path="/dashboard/admin" component={AdminDashboard}/>
        <PrivateRoute path="/dashboard/user" component={UserDashboard}/>
        <AdminRoute path="/create/category" component={CreateCategory}/>
        <AdminRoute path="/create/product" component={CreateProduct}/>
      </Switch>
    </Router>
  );
};
export default Routes;
