import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <Container>
            <Navbar fixed="top" className="navBar justify-content-center">
                <Nav>
                    <Link 
                        to="about"
                        // activeClass="activeLink"
                        className="nav-link navLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >About</Link>
                   
                    <Link 
                        to="projects"
                        // activeClass="activeLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                        className="nav-link navLink"
                    >Projects</Link>

                    <Link 
                        to="contact" 
                        // activeClass="activeLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="nav-link navLink"
                    >Contact</Link>

                    <Nav.Link href="https://medium.com/@btmccollum" target="_blank" className="navLink" rel="noopener noreferrer">Blog</Nav.Link>

                    <Nav.Link href="https://drive.google.com/file/d/1Ak7nxQeHiutgkja66ZMRGqARRsqGQYUr/view?usp=sharing" target="_blank" className="navLink" rel="noopener noreferrer">Résumé</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar;