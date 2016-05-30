import React from "react";
import Item from "./Portfolio/Item";

export default class Portfolio extends React.Component {
  render() {
    return (
      <section class="spacing--horizontal">
        <h2 class="title">Portfolio</h2>
        <Item
          img="./img/1_g.jpg"
          imghover="./img/1.jpg"
          anchor="search"
          title="iPlayer Radio Search"
          description="This project was designed to improve the user experience
          by making it easier for the user to find what they were looking for.
          It returns results from different sources and stores clicked on results
          and also what the user has searched. It gets over 500,000 impressions a month and has generally had positive feedback.
          I have played an instrumental role of the recent update to this spearheading UX changes, optimsation (SVG, JS, CSS)
          and improving the general user experience. "
          tech="PHP (Silex, Twig), JS (RequireJS, Handlebars, Grunt), CSS (SCSS, BEM)."
          location="//bbc.co.uk/radio"
        />
        <Item
          img="./img/2_g.jpg"
          imghover="./img/2.jpg"
          anchor="favourites"
          title="iPlayer Radio favourites"
          description="This was a project which required a back end overhaul (due to an internal system being switched off) which was a dependency for the previous
          version of iPlayer Radio favourites. I joined this 'feature crew' as the front end developer as this required an entirely new
          front end. The project in total took 6 weeks to complete. Due to the tight deadline and the big task, I worked closely with UX
          designers to accomplish the project at hand working with project management techniques. This project is the beginning of a wider aim to achieve a personalised BBC Radio."
          tech="PHP (Silex, Twig), JS (RequireJS, Grunt), CSS (SCSS, BEM), Trello, Zeplin"
          location="//bbc.co.uk/radio/favourites"
        />
        <Item
          img="./img/3_g.jpg"
          imghover="./img/3.jpg"
          anchor="v2"
          title="iPlayer Radio V2"
          description="This project was to completely rebuild each of the BBC's radio network station
          homepages. (radio1, radio4, radioleicester) etc. This project was carefully planned due to the big scope
          taking in mind each of the networks specific requirements. This also meant the monumental change of control for the Radio 1 website
          which was previously controlled by an independent software house. I played a monumental part with leading development roles on certain
          components of the new homepages. I also worked within feature crews to achieve specific tasks. This project lasted about 9 months
          and I improved my soft skills as well as my technical skills."
          tech="PHP (Silex, Twig), JS (RequireJS, Grunt, Handlebars), CSS (SCSS, BEM), JIRA"
          location="//bbc.co.uk/radio1"
        />
        <p>More to come...</p>
      </section>
    );
  }
}
