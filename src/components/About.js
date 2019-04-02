import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DiHtml5, DiCss3, DiJsBadge, DiJqueryLogo, DiRubyRough, DiRor, DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

const About = () => {

    return (
        <section id="about">
            <Container className="h-100">
                <h1 className="sectionTitle">About Me</h1>
                
                <Row>
                    <Col>
                        <h3>Hi! I'm Brad McCollum, a full-stack web developer with a passion for creating. </h3>

                        
                        <Row className="aboutIcons justify-content-center">
                            <IconContext.Provider value={{ color: "rgb(248, 112, 87)", className: "aboutIcons", size: "2em" }}>
                                <DiRubyRough value= {{size: 'em'}} /> <DiRor /> <DiJsBadge /> <DiReact /> <DiJqueryLogo /> <DiHtml5 /> <DiCss3 />
                            </IconContext.Provider>
                        </Row>
                        <br />

                        <p>I am currently pursuing a dream to make a transition in to web development. I've spent the last seven years as a results-oriented and highly driven manager in the financial services field. Experienced in both the back and middle office dealing with all aspects of retail client account opening/maintenance, associate development, and regulatory initiatives.</p>

                        <p>Programming has always been of great interest to me, especially since technologies are constantly advancing and provide great opportunities for life-long learning. My exposure started with some introductory classes to C++ at a young age that really ignited the spark and continued up through college while dabbling in HTML, CSS, and JavaScript on the side. Creative outlets have always been of great importance to me and many of them remain important hobbies to this day such as cooking, drawing, guitar, and even the decision to pursue learning Mandarin Chinese in college and spending a year in Beijing. </p>

                        <p>Over the last few years I decided that programming and code were ultimately something that I wanted to know more about and be more involved in. This led me to the Flatiron School in August of 2018 as an opportunity to build upon what I already knew and a way to accelerate that development to make the change I want to see!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;