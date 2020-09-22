import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign from "./pages/sign";
import Home from "./pages/home";
import UserDashboard from "./pages/userDashboard";
import AdminDashboard from "./pages/adminDashboard";
import { PrivateRoute, AdminRoute } from "./helpers/auth";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin-or-signup">
          <Sign />
        </Route>
        <AdminRoute path="/dashboard/admin" component={AdminDashboard}/>
        <PrivateRoute path="/dashboard/user" component={UserDashboard}/>
      </Switch>
    </Router>
  );
};
export default Routes;
