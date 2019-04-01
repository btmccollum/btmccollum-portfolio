import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

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
                    
                    {/* <Link 
                        to="blog" 
                        // activeClass="activeLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="nav-link navLink"
                    >Blog</Link> */}

                    <Link 
                        to="contact" 
                        // activeClass="activeLink"
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