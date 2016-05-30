import React from "react";

export default class Link extends React.Component {
  render() {
    return (
      <a class="spacing--horizontal text--center" href={this.props.link} target="_blank">
        {this.props.title}
      </a>
    );
  }
}
