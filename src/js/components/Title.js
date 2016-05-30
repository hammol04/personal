import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <h1 class="spacing--small text--center text--normal">{this.props.text}</h1>
    );
  }
}
