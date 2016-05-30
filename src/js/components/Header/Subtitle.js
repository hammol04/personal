import React from "react";

export default class SubTitle extends React.Component {
  render() {
    return (
      <h2 class="header__subtitle text--center text--normal">{this.props.text}</h2>
    );
  }
}
