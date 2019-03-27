import React from 'react';
import headshot from '../images/mccollum-headshot.jpg'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

    return (
        <section id="home">
            <Container className="content h-100 justify-content-center">
                {/* <h1>Brad McCollum</h1> */}
                <Row className="contentRow align-content-center">
                    <Col xs={4} className="headshotCol">
                        <div className="headshot h-100">
                            <img src={headshot} alt="my headshot" className="me img-fluid" /> 
                        </div>
                    </Col>
    
                    <Col xs={8} className="socialsCol">
                        <div className="socials">
                            <span className="divider"></span>
                            <a href="https://www.github.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x" /></a> 
                            <span className="divider"></span>
                            <a href="https://www.linkedin.com/in/btmccollum/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
                            <span className="divider"></span>
                            <a href="https://www.twitter.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;