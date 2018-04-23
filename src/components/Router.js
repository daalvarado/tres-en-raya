import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Scores from "./Scores";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path='/scores' component={Scores} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
