import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headshot from '../images/mccollum-headshot.jpg'
import { Card, Button } from 'react-bootstrap';
import cuid from 'cuid';
import { format } from 'util';

const Projects = props => {
    // iterate through imported project collection object to create display cards
    const projectList = props.projectData.projects.map(project => {
        let herokuLink

        // check if JSON object includes a heroku deployment link and return button if so
        if (!!project.herokuLink) { 
            herokuLink = <Button variant="link" href={project.herokuLink} target="_blank" className="herokuLink">Heroku</Button>
        }

        return (
            <Card className="projectCard" style={{ width: '16rem' }} key={cuid()}>
                <Card.Img variant="top" className="img-fluid" src={project.image} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>

                    <Card.Text className="languages">
                        Created with: {project.languages.join(" + ")}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="link" href={project.blogLink} target="_blank" className="blogLink">Blog</Button>
                    {herokuLink}
                    <Button variant="link" href={project.repoLink} target="_blank" className="codeLink">Code</Button>
                </Card.Footer>
            </Card>
        )
    })

    // creating display for projects section on main page
    return (
        <section id="projects">
            <Container className="h-100">
                <h1 className="sectionTitle">Projects</h1>
                <h3>Check out what I've been working on lately:</h3>
                <Row className="justify-content-center">
                    {/* calling projectList const from above to create cards dynamically */}
                    {projectList}
                </Row>
            </Container>
        </section>
    )
}

export default Projects;