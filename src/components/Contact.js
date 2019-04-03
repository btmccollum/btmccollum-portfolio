import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id="contact">
                <Container fluid className="h-100">
                    <Row className="justify-content-center align-content-center h-100">
                        <Col md={3}>
                            {/* section title, content removed at breakpoint */}
                            <div className="contactBlock">
                                <h2 className="margin-b-0 sectionTitle contactTitle">Contact</h2>
                            </div>
                        </Col>
                
                        <Col sm={8}>
                            <Row className="justify-content-center">
                                {/* location info, content removed at breakpoint */}
                                <Col md={3} className="contactBlock location">
                                    <h5 className="headerTitle">Location</h5>
                                    <a>Fort Worth, Texas</a>
                                </Col>

                                <Col md={5} sm={6} xs={6} className="contactBlock">
                                    <h5 className="headerTitle">Email</h5>
                                    <a className="normalEmail" href="mailto:bmccollum.swe@gmail.com">bmccollum.swe@gmail.com</a>

                                    {/* displayed only as smallest media queries */}
                                    <a className="miniEmail" href="mailto:bmccollum.swe@gmail.com"><FontAwesomeIcon icon="envelope-square" size="3x" /></a>
                                </Col>

                                <Col md={4} sm={6} xs={6} className="contactBlock socialBlock">
                                    <h5 className="headerTitle">Social Media</h5>

                                    <a href="https://www.github.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x" /></a>
                                    <span className="spacer"></span>
                                    <a href="https://www.linkedin.com/in/btmccollum/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
                                    <span className="spacer"></span>
                                    <a href="https://www.twitter.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x" /></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </section>
    )
}

export default Contact;