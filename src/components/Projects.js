import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headshot from '../images/mccollum-headshot.jpg'
import { Card, Button } from 'react-bootstrap';

const Projects = props => {
    // iterate through imported project collection object to create display cards
    const projectList = props.projectData.projects.map(project => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                    <Button variant="link" href={project.blogLink} target="_blank" className="blogLink">Blog</Button>
                    <Button variant="link" href={project.repoLink} target="_blank" className="codeLink">Code</Button>
                </Card.Body>
            </Card>
        )
    })

    // creating display for projects section on main page
    return (
        <section id="projects">
            <Container className="h-100">
                <h1 className="sectionTitle">Projects</h1>
                <Row>
                    {/* calling projectList const from above to create cards dynamically */}
                    {projectList}
                </Row>
            </Container>
        </section>
    )
}

export default Projects;