import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

// const Contact = () => {

class Contact extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

    render() {
        return (
            <section id="contact" ref={this.myRef}>
                <div>
                    <Container>
                        <Row>
                            <div className="col-sm-3 sm-margin-b-30">
                                <div className="text-right sm-text-left">
                                    <h2 className="margin-b-0">Contacts</h2>
                                </div>
                            </div>
                            <div className="col-sm-8 col-sm-offset-1">
                                <div className="row">
                                    <div className="col-md-3 col-xs-6 md-margin-b-30">
                                        <h5>Location</h5>
                                        <a>Fort Worth, Texas</a>
                                    </div>
                                    <div className="col-md-3 col-xs-6 md-margin-b-30">
                                        <h5>Email</h5>
                                        <a href="mailto:#">bmccollum.swe@gmail.com</a>
                                    </div>
                                    <div className="col-md-3 col-xs-6">
                                        <h5>Social Media</h5>
                                        <Col className="socials">
                                            <a href="https://www.github.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x" /></a> 
                                            <a href="https://www.linkedin.com/in/btmccollum/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
                                            <a href="https://www.twitter.com/btmccollum" target="_blank"><FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x" /></a>
                                        </Col>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default Contact;