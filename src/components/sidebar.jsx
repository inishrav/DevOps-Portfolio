import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me.jpg)'}} />
              <h1 id="colorlib-logo">
                <a href="index.html">
                  <img src="images/me.jpg" alt="User Image" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                </a>
              </h1>
              <span className="email">
                <i className="icon-mail" /> varshiiniiv@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#Education" data-nav-section="Education"></a>
                  </li>
                  <li>
                    <a href="Certifications" data-nav-section="Certifications"></a>
                  </li>
                  <li>
                    <a href="Projects" data-nav-section="projects"></a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/varshini-c-883613285/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/inishrav" target="_blank" rel="noopener noreferrer">
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
  }
}
