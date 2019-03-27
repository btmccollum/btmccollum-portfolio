import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container>
            <Navbar fixed="top" className="navBar justify-content-center">
                <Nav>
                    <Nav.Link href="/home">ABOUT</Nav.Link>
                    <Nav.Link eventKey="/projects">PROJECTS</Nav.Link>
                    <Nav.Link eventKey="/blog">BLOG</Nav.Link>
                    <Nav.Link eventKey="/blog">CONTACT</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar;