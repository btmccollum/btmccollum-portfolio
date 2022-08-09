import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJqueryLogo,
  DiRubyRough,
  DiRor,
  DiReact
} from "react-icons/di";
import { IconContext } from "react-icons";

const About = () => {
  const introP1 = `I've spent the last three years working as a full-stack developer, primarily with
    Ruby on Rails and React / Redux. Prior to making a transition to technology, I spent the previous
    seven years as a results-oriented and highly driven manager in the financial services industry.`;
  const introP2 = `Programming has always been of great interest to me, especially since technologies
    are constantly advancing and provide great opportunities for life-long learning. My exposure
    started with some introductory classes to C++ at a young age that really ignited the spark and
    continued up through college while dabbling in HTML, CSS, and JavaScript on the side. Creative
    outlets have always been of great importance to me and many of them remain important hobbies to
    this day such as cooking, drawing, gardening, and even the decision to pursue learning Mandarin
    Chinese in college and spending a year in Beijing.`;
  const introP3 = `In my free time I like to dabble with Elixir, working to increase my proficeincy
    with both the language and functional programming. Outside of programming I can usually be found
    hiking, fishing, tinkering with mechanical keyboards, brewing beer, or just enjoying some video
    games with friends.`;

  return (
    <section id="about">
      <Container className="h-100">
        <h1 className="sectionTitle">About Me</h1>
        <Row>
          <Col>
            <h3>Hi! I'm Brad McCollum, a software engineer with a passion for creating. </h3>
            <Row className="aboutIcons justify-content-center">
              <IconContext.Provider value={{ color: "rgb(248, 112, 87)", className: "aboutIcon", size: "3.5em" }}>
                <DiRubyRough value= {{size: 'em'}} />
                <DiRor />
                <DiJsBadge />
                <DiReact />
                <DiJqueryLogo />
                <DiHtml5 />
                <DiCss3 />
              </IconContext.Provider>
            </Row>
            <br />
            <p>{introP1}</p>
            <p>{introP2}</p>
            <p>{introP3}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
