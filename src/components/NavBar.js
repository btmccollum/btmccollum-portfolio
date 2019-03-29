import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container>
            <Navbar fixed="top" className="navBar justify-content-center">
                <Nav>
                    <Nav.Link href="/home" className="navLink">About</Nav.Link>
                    <Nav.Link eventKey="/projects" className="navLink">Projects</Nav.Link>
                    <Nav.Link eventKey="/blog" className="navLink">Blog</Nav.Link>
                    <Nav.Link eventKey="/contact" className="navLink">Contact</Nav.Link>
                    <Nav.Link href="https://drive.google.com/open?id=1Ycoomohehryhap_UO56rM1UmDc9YdXE5" target="_blank" className="navLink">Résumé</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar;