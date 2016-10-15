import React from "react";
import Link from "./Navigation/Link";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav class="spacing--horizontal text--center">
        <Link title="Photography" link="http://ham-made.format.com"/>
        <Link title="LinkedIn" link="https://www.linkedin.com/in/laurence-hammond-162648a5"/>
        <Link title="GitHub" link="https://github.com/hammol04"/>
        <Link title="CV" link="https://www.dropbox.com/s/8qy67svsmlb7qgv/PUBLIC-Japan%20-%20CV%20-%20Laurence%20James%20Hammond.pdf?dl=0"/>
        <Link title="Email" link="mailto:247hammond@live.com"/>
      </nav>
    );
  }
}
