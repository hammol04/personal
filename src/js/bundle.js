import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page";
import { Router, browserHistory, Route, IndexRoute } from "react-router";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRoute component={Page}></IndexRoute>
    </Route>
  </Router>,
app);
