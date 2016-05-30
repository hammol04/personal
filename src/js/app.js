import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Page}>
    <IndexRoute component={Page}></IndexRoute>
    </Route>
  </Router>,
app);
