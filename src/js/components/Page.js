import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Reccomend from "./Reccomend";
import Footer from "./Footer";

export default class Page extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <Header />
        <Portfolio />
        <Reccomend />
        <Footer />
      </section>
    );
  }
}
