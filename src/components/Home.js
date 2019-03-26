import React from 'react';
import headshot from '../images/mccollum-headshot.jpg'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare faGithubSquare faLinkedin } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTwitterSquare faGithubSquare faLinkedin)

const Contact = () => {

    return (
        <Container>
            <Row>
                <Col className="headshot">
                    <img src={headshot} alt="my headshot" className="me" /> 
                </Col>

                <Col className="headshotInfo">
                    <h1>Brad McCollum</h1>
                </Col>

                <Col>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact Me</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;