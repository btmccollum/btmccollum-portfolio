import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Blog = () => {

    return (
        <section id="blog">
            <Container className="h-100">
                <h1 className="sectionTitle">Blog</h1>
                
                <Row>
                    <Col>
                        Content to go here...
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <div className="projectBox">
                            <header>Blog Post</header>
                            Test
                            <footer>React</footer>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="projectBox">
                            <header>Blog Post</header>
                            Test
                            <footer>React</footer>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="projectBox">
                            <header>Blog Post</header>
                            Test
                            <footer>React</footer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blog;