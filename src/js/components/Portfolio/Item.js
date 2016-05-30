import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img
    };
  }

  onMouseOver(e) {
    let img = this.props.imghover;
    this.setState({
      img
    });
  }

  onMouseOut(e) {
    let img = this.props.img;
    this.setState({
      img
    });
  }

  render() {
    return (
      <article class="item">
        <a name={this.props.anchor}></a> 
        <figure class="item__image spacing--none">
          <img class="image-example"
          src={this.state.img}
          alt={this.props.title}
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseOut={this.onMouseOut.bind(this)}
          />
        </figure><div class="item__info">
          <h2 class="spacing--none">{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p>Tech: {this.props.tech}</p>
          <span>Where:</span> <a href={this.props.location}> {this.props.location}</a>
        </div>
      </article>
    );
  }
}
