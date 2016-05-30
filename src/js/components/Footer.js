import React from "react";
import Copyright from "./Footer/Copyright";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer spacing--none spacing--horizontal">
        <Copyright text="Made by Laurence Hammond. Source code on github. /hammol04" />
      </footer>
    );
  }
}
