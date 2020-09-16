import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign from "./pages/sign";
import Home from "./pages/home";

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
      </Switch>
    </Router>
  );
};
export default Routes;
