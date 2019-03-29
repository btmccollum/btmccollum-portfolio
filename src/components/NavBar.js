import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

// const NavBar = () => {
//     return (
//         <Container>
//             <Navbar fixed="top" className="navBar justify-content-center">
//                 <Nav>
//                     <Link 
//                         to="about"
//                         activeClass="activeLink"
//                         className="nav-link navLink"
//                         spy={true}
//                         smooth={true}
//                         offset={-70}
//                         duration= {500}
//                     >About</Link>
                   
//                     <Link 
//                         to="projects"
//                         activeClass="activeLink"
//                         spy={true}
//                         smooth={true}
//                         offset={-70}
//                         duration= {500} 
//                         className="nav-link navLink"
//                     >Projects</Link>
                    
//                     <Link 
//                         to="blog" 
//                         activeClass="activeLink"
//                         spy={true}
//                         smooth={true}
//                         offset={-70}
//                         duration= {500}
//                         className="nav-link navLink"
//                     >Blog</Link>

//                     <Link 
//                         to="contact" 
//                         activeClass="activeLink"
//                         onClick={}
//                         spy={true}
//                         smooth={true}
//                         offset={-70}
//                         duration= {500}
//                         className="nav-link navLink"
//                     >Contact</Link>

//                     <Nav.Link href="https://drive.google.com/open?id=1Ycoomohehryhap_UO56rM1UmDc9YdXE5" target="_blank" className="navLink">Résumé</Nav.Link>
//                 </Nav>
//             </Navbar>
//         </Container>
//     )
// }

// const NavBar = () => {
function NavBar() {

    // implementing simple hook
    const [status, setStatus] = useState(false);

    // const changeClass = event => {
    //     // debugger;
    //     document.querySelector('.activeLink').classList.remove('activeLink')
    //     event.target.classList.add('activeLink')
    // }
    function updateStatus() {
        console.log('fire')
        status === false ? setStatus(true) : setStatus(false);
    }

    const updateClass = () => {
        if (status === true) {
            document.querySelector('.activeLink').classList.remove('activeLink')
            return "nav-link navLink activeLink"
        } else {
            return "nav-link navLink"
        }    
    }

    return (
        <Container>
            <Navbar fixed="top" className="navBar justify-content-center">
                <Nav>
                    <Link 
                        to="about"
                        activeClass="activeLink"
                        className="nav-link navLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >About</Link>
                
                    <Link 
                        to="projects"
                        activeClass="activeLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                        className="nav-link navLink"
                    >Projects</Link>
                    
                    <Link 
                        to="blog" 
                        activeClass="activeLink"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="nav-link navLink"
                    >Blog</Link>

                    <Link 
                        to="contact" 
                        // activeClass="activeLink"
                        onClick={() => updateStatus()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className={updateClass()}
                    >Contact</Link>

                    <Nav.Link href="https://drive.google.com/open?id=1Ycoomohehryhap_UO56rM1UmDc9YdXE5" target="_blank" className="navLink">Résumé</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}


export default NavBar;