import React from "react";

export default class Copyright extends React.Component {
  render() {
    return (
      <p class="spacing--none text--center text--normal">{this.props.text}</p>
    );
  }
}
