import React from "react";

export default class Link extends React.Component {
  render() {
    return (
      <article class="text--break">
        {this.props.type}: {this.props.title} - {this.props.link}
      </article>
    );
  }
}
