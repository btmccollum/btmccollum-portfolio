import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container>
            <Navbar fixed="top" className="navBar justify-content-center">
                <Nav>
                    <Nav.Link href="/home" className="navLink">ABOUT</Nav.Link>
                    <Nav.Link eventKey="/projects" className="navLink">PROJECTS</Nav.Link>
                    <Nav.Link eventKey="/blog" className="navLink">BLOG</Nav.Link>
                    <Nav.Link eventKey="/blog" className="navLink">CONTACT</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar;