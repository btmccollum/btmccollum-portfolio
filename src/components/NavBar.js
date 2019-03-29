import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

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
                        to="blog" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="nav-link navLink"
                    >Blog</Link>

                    <Link 
                        to="contact" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="nav-link navLink"
                    >Contact</Link>

                    <Nav.Link href="https://drive.google.com/open?id=1Ycoomohehryhap_UO56rM1UmDc9YdXE5" target="_blank" className="navLink">Résumé</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar;