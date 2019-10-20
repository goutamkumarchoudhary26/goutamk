import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Skills from './components/skills'
import Work from './components/work'
//import Portfolio from './components/portfolio'
import About from './components/about'
import Contact from './components/contact'
import Timeline from './components/timeline'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
          <Skills></Skills>
          <Work></Work>
          {/* //<Portfolio></Portfolio> */}
					<Timeline></Timeline>
          <About></About>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
