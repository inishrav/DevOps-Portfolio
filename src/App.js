import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Education from './components/Education'
import Certifications from './components/Certifications'
import projects from './components/projects'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
			<Introduction></Introduction>
					<About></About>
					<Education></Education>
          <Certifications></Certifications>
        <projects></projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
