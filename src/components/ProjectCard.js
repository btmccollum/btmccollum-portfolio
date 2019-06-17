import React, { useState } from 'react';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import cuid from 'cuid';

const ProjectCard = props => {
    // using hooks to set minor state of hover property to utilize transform scale css
    const [hovered, setHovered] = useState(false); 
    const toggleHover = () => setHovered(!hovered);

    const project = props.projectData
    let herokuLink

    // check if JSON object includes a heroku deployment link and return button if so
    const linkReturn = () => {
        if (!!project.herokuLink) { 
            return <Button className="herokuLink" variant="link" href={project.herokuLink} target="_blank" className="herokuLink">Heroku</Button>
        }
    }

    return (
        <Card className={hovered ? 'projectCard' : ''} onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ width: '20rem' }}>
            <Card.Img variant="top" className="img-fluid" src={project.image} alt="random image representing project"/>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>

                <Card.Text className="languages">
                    Created with: {project.languages.join(", ")}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {/* need to conditionally render depending on whether or not it has a heroku link */}
                {linkReturn()}
                <Button variant="link" href={project.repoLink} target="_blank" className="codeLink">Code</Button>
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard