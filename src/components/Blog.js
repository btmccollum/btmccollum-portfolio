import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import content from '../blog/blog-content';

const Blog = props => {
    debugger;
    return (
        <section id="blog">
            <Container className="h-100">
                <h1 className="sectionTitle">Blog</h1>

                <Row>
                    <Col md={4}>
                        <div className="projectBox">
                            <header>Blog Post</header>
                            {props.blogData.blogEntries[0].content}
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