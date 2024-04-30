import React, { Component } from 'react';

export default class Certifications extends Component {
  state = {
    certificates: [
      { name: 'Web designing - FreeCodeCamp', image: '' },
      { name: 'Selenium Webdriver with Java - Basics', image: '' },
      { name: 'Python - Guvi', image: '' },
    ],
  };

  handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const certificates = [...this.state.certificates];
      certificates[index].image = reader.result;
      this.setState({ certificates });
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Certifications</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {this.state.certificates.map((certificate, index) => (
                    <article key={index} className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>{certificate.name}</h2>
                          {certificate.image ? (
                            <img src={certificate.image} alt={certificate.name} style={{ maxWidth: '200px' }} />
                          ) : (
                            <input type="file" accept="image/*" onChange={(event) => this.handleImageUpload(index, event)} />
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
