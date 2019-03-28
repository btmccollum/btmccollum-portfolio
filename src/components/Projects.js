import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headshot from '../images/mccollum-headshot.jpg'

const Projects = () => {

    return (
        <section id="projects">
            <Container className="h-100">
                <h1 className="sectionTitle">Projects</h1>
                <Row>
                    <Col md={4}>
                        <div className="projectBox">
                            <header>Droplet for Reddit</header>
                            Test
                            <footer>React</footer>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="projectBox">
                            <header>Droplet for Reddit</header>
                            Test
                            <footer>React</footer>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="projectBox">
                            <header>Droplet for Reddit</header>
                            Test
                            <footer>React</footer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;