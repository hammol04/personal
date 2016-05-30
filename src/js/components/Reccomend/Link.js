import React from "react";

export default class Link extends React.Component {
  render() {
    return (
      <article>
        {this.props.type}: {this.props.title} - {this.props.link}
      </article>
    );
  }
}
