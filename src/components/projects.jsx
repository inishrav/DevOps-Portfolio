import React, { Component } from 'react';

export default class projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Banking ChatBot-Virtual Assistant of AI <span>Work 01</span></h2>
                        <p>Project Description</p>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3" /></a></span>
                          <span><a href="#"><i className="icon-eye" /> 100</a></span>
                          <span><a href="#"><i className="icon-heart" /> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DevOps-Portfolio <span>Work 02</span></h2>
                        <p>Project Description</p>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3" /></a></span>
                          <span><a href="#"><i className="icon-eye" /> 100</a></span>
                          <span><a href="#"><i className="icon-heart" /> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Design <span>Work 06</span></h2>
                        <p>Project Description</p>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3" /></a></span>
                          <span><a href="#"><i className="icon-eye" /> 100</a></span>
                          <span><a href="#"><i className="icon-heart" /> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
