import React, { useState } from 'react';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import cuid from 'cuid';
import ProjectCard from './ProjectCard'

const Projects = props => {
    const projectList = props.projectData.projects.map(project => {
<<<<<<< HEAD
        let herokuLink, blogLink

        // check if JSON object includes a heroku deployment link and return button if so
        if (!!project.herokuLink) { 
            herokuLink = <Button variant="link" href={project.herokuLink} target="_blank" className="herokuLink">Heroku</Button>
        }

        if (!!project.blogLink) {
            blogLink = <Button variant="link" href={project.blogLink} target="_blank" className="blogLink">Blog</Button>
        }

        return (
            <Card className="projectCard" style={{ width: '16rem' }} key={cuid()}>
                <Card.Img variant="top" className="img-fluid" src={project.image} alt="random image representing project"/>
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
                    {blogLink}
                    {herokuLink}
                    <Button variant="link" href={project.repoLink} target="_blank" className="codeLink">Code</Button>
                </Card.Footer>
            </Card>
        )
=======
        return <ProjectCard projectData={project}  key={cuid()}/>
>>>>>>> development
    })

    // creating display for projects section on main page
    return (
        <section id="projects">
            <Container className="h-100">
                <h1 className="sectionTitle">Projects</h1>
                <h3>Check out some projects I've been working on lately:</h3>
                <Row className="justify-content-center projectsRow">
                    {projectList}
                </Row>
            </Container>
        </section>
    )
}

export default Projects;