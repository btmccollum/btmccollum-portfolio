import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollUpButton from 'react-scroll-up-button';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import projectData from './content/projects/project-data';

import './App.css';

// library for fontawesome icons, importing brand icons
library.add(fab, faEnvelopeSquare)

class App extends Component {
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
