import React from "react";
import Reccomendation from "./Reccomend/Link";

export default class Reccomend extends React.Component {
  render() {
    return (
      <section class="spacing spacing--horizontal">
        <h2 class="title">Things I Reccomend</h2>
        <Reccomendation type="Podcast" title="Soft Skills Engineering" link="twitter.com/softskillseng"/>
        <Reccomendation type="Reading" title="jQuery source code. It's personally taught me a lot" link="ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.js"/>
        <Reccomendation type="Reading" title="BEM CSS. A whole new philopsophy to front end CSS. Please read!" link="getbem.com"/>
        <Reccomendation type="Talk" title="Bin your <select>" link="jqueryuk.com/2015/videos.php?s=bin-your-"/>
      </section>
    );
  }
}
