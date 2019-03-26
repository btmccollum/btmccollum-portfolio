import React from 'react';
import headshot from '../images/mccollum-headshot.jpg'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col className="headshot" xs={3}>
                        <img src={headshot} alt="my headshot" className="me" /> 
                    </Col>
    
                    <Col className="headshotInfo" xs={6}>
                        <h1>Brad McCollum</h1>
                        <Row>
                            <Col className="socials">
                                <FontAwesomeIcon icon={["fab", "github-square"]} />
                                <FontAwesomeIcon icon={["fab", "linkedin"]} />    
                                <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact Me</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;