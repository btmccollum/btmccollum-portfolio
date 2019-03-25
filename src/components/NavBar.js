import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        // Placeholder navbar
        <div className="navBar">
            My Portfolio Test Header | <Link to="/about">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/blog">Blog</Link> | <Link to="/contact">Contact Me</Link>
        </div>
    )
}

export default NavBar;