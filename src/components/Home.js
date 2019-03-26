import React from 'react';
import headshot from '../images/mccollum-headshot.jpg'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    return (
        <section id="home">
            <Container className="content">
                <Row>
                    <Col className="headshot" xs={4}>
                        <img src={headshot} alt="my headshot" className="me" /> 
                    </Col>
    
                    <Col className="headshotInfo" xs={8}>
                        <h1 className="name">Brad McCollum</h1>
                        <Row className="justify-content-md-center">
                            <Col className="socials">
                                <a href="https://www.github.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x" /></a> 
                                <a href="https://www.linkedin.com/in/btmccollum/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
                                <a href="https://www.twitter.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x" /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* <Container>
                <Row>
                    <Col className="options">
                        <Link to="/about">About Me</Link> | 
                        <Link to="/projects">Projects</Link> | 
                        <Link to="/blog">Blog</Link> | 
                        <Link to="/contact">Contact Me</Link>
                    </Col>
                </Row>
            </Container> */}
        </section>
    )
}

export default Contact;