import React from "react";
import Title from "./Header/Title";
import Subtitle from "./Header/Subtitle";
import Navigation from "./Navigation";

export default class Header extends React.Component {
  render() {
    return (
      <header class="header spacing spacing--horizontal">
        <Title text="Laurence Hammond" />
        <Subtitle text="Hi, I am Laurence Hammond. Current areas of interest: ReactJS, Full Stack, PHP7" />
        <Navigation></Navigation>
      </header>
    );
  }
}
