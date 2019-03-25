import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <React.Fragment>
            <h1>My Portfolio Test Header</h1>

            Categories:
            <Link to="/about"><h3>About Me</h3></Link>
            <Link to="/projects"><h3>Projects</h3></Link>
            <Link to="/contact"><h3>Contact Me</h3></Link>
        </React.Fragment>
    )
}

export default Contact;