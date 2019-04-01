import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollUpButton from "react-scroll-up-button";
import blogData from './blog/blog-content';

import './App.css';

// library for fontawesome icons, importing brand icons
library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Projects />
        {/* <Blog blogData={blogData} /> */}
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
