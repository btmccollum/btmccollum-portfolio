import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import ScrollUpButton from 'react-scroll-up-button';
import projectData from './content/projects/projectData';
import './App.css';

// library for fontawesome icons, importing brand icons
library.add(fab, faEnvelopeSquare)

class App extends Component {
  componentDidMount() {
    console.log('Thanks for taking a look at my portfolio!\nCheck out my other pages too:\n\nWebsite: www.btmccollum.com\n\nGitHub: www.github.com/btmccollum\n\nLinkedIn: https://www.linkedin.com/in/btmccollum/\n\nBlog: https://medium.com/@btmccollum\n\nTwitter: www.twitter.com/btmccollum\n\nEmail: bmccollum.swe@gmail.com\n\n');
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Projects projectData={projectData} />
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
