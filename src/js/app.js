import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page";

if (typeof window !== undefined) {
  const app = document.getElementById('app');
  ReactDOM.render(<Page/>, app);
}
