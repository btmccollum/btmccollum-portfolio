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
                        className="nav-link navLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >About</Link>
                   
                    <Link 
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                        className="nav-link navLink"
                    >Projects</Link>

                    <Link 
                        to="contact" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="nav-link navLink"
                    >Contact</Link>

                    <Nav.Link href="https://medium.com/@btmccollum" target="_blank" className="navLink" rel="noopener noreferrer">Blog</Nav.Link>

                    <Nav.Link href="https://drive.google.com/file/d/1hfVueJusGbs2Q4jbXMcvvJBWygmgoM_w/view?usp=sharing" target="_blank" className="navLink" rel="noopener noreferrer">Résumé</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar;