import React from 'react';
import { Container, Row } from 'react-bootstrap';
import cuid from 'cuid';
import ProjectCard from './ProjectCard'

const Projects = props => {
    const projectList = props.projectData.projects.map(project => {
        return <ProjectCard projectData={project}  key={cuid()}/>
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