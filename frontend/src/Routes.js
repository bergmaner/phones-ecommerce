import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignOut from "./pages/signOut";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signOut">
          <SignOut />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
