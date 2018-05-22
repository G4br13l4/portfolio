import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/js/NavBar';
import Home from './Components/js/Home';
import About from './Components/js/About';
import Skills from './Components/js/Skills';
import Projects from './Components/js/Projects';
import Contact from './Components/js/Contact';
import Places from './Components/js/Places';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/places" component={Places} />      
      </div>
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
