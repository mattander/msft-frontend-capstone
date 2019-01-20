import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { paused: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    if (this.props.loaded) {
      return (
        <div>
          <h3>Carousel</h3>

          <section id="productCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#productCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#productCarousel" data-slide-to="1"></li>
              <li data-target="#productCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <article className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <img src={this.props.data[0].subcategories[0].items[0].imagelink} alt="..." />
                  </div>
                </div>
              </article>
              <article className="carousel-item">
                <img src={this.props.data[0].subcategories[0].items[1].imagelink} alt="..." />
              </article>
              <article className="carousel-item">
                <img src={this.props.data[0].subcategories[0].items[2].imagelink} alt="..." />
              </article>
            </div>
            <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
              <FontAwesomeIcon aria-hidden="true" icon="chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
              <FontAwesomeIcon aria-hidden="true" icon="chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </section>
          <div className="form-check float-right">
            <input className="form-check-input" type="checkbox" value="" id="slideshow" />
            <label className="form-check-label" htmlFor="slideshow">
              Pause slideshow
            </label>
          </div>

        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  }
}

export default Carousel;