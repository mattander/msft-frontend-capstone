import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toTitleCase } from '../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      currentSlide: 1,
      carousel: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    if (!this.state.paused) {
      // if the carousel is not paused, rotate every three seconds
      const carousel = setInterval(() => {
        if (this.state.currentSlide === document.querySelector('.carousel-slide-container').children.length) {
          // if we're on the last slide
          document.querySelector('.active-item').classList.remove('active-item');
          document.querySelector('#slide-1').classList.add('active-item');
          this.setState({
            currentSlide: 1
          })
        } else {
          // otherwise, go to the next slide
          document.querySelector('.active-item').classList.remove('active-item');
          document.querySelector('#slide-' + (this.state.currentSlide + 1)).classList.add('active-item');
          this.setState({
            currentSlide: this.state.currentSlide + 1
          })
        }
      }, 3000);

      this.setState({
        carousel: carousel
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.carousel);
  }

  // rubric10 - If the “Toggle Slide Show” switch is checked, the product carousel should automatically move forward one slide every 3 seconds 
  handleChange(e) {
    this.setState({
      paused: !this.state.paused
    });

    if (this.state.paused) {
      // if it's paused, restart rotation and store it for clearing to avoid memory leaks
      this.setState({
        paused: !this.state.paused
      });

      const carousel = setInterval(() => {
        if (this.state.currentSlide === document.querySelector('.carousel-slide-container').children.length) {
          // if we're on the last slide
          document.querySelector('.active-item').classList.remove('active-item');
          document.querySelector('#slide-1').classList.add('active-item');
          this.setState({
            currentSlide: 1
          })
        } else {
          // otherwise, go to the next slide
          document.querySelector('.active-item').classList.remove('active-item');
          document.querySelector('#slide-' + (this.state.currentSlide + 1)).classList.add('active-item');
          this.setState({
            currentSlide: this.state.currentSlide + 1
          })
        }
      }, 3000);

      this.setState({
        carousel: carousel
      })
    } else {
      // if it's not paused then clear it
      this.setState({
        paused: !this.state.paused
      });
      clearInterval(this.state.carousel);
    }
  };

  // rubric07 - Clicking on the right arrow should move the product carousel one slide forward. 
  nextSlide(e) {
    if (this.state.currentSlide === document.querySelector('.carousel-slide-container').children.length) {
      // if we're on the last slide
      document.querySelector('.active-item').classList.remove('active-item');
      document.querySelector('#slide-1').classList.add('active-item');
      this.setState({
        currentSlide: 1
      })
    } else {
      // otherwise, go to the next slide
      document.querySelector('.active-item').classList.remove('active-item');
      document.querySelector('#slide-' + (this.state.currentSlide + 1)).classList.add('active-item');
      this.setState({
        currentSlide: this.state.currentSlide + 1
      })
    }
  }

  // rubric08 - Clicking on the left arrow should move the product carousel one slide back
  prevSlide(e) {
    if (this.state.currentSlide === 1) {
      // if we're on the first slide
      document.querySelector('.active-item').classList.remove('active-item');
      document.querySelector('#slide-' + document.querySelector('.carousel-slide-container').children.length).classList.add('active-item');
      this.setState({
        currentSlide: (document.querySelector('.carousel-slide-container').children.length)
      })
    } else {
      // otherwise, go to the prev slide
      document.querySelector('.active-item').classList.remove('active-item');
      document.querySelector('#slide-' + (this.state.currentSlide - 1)).classList.add('active-item');
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }

  render() {
    if (this.props.loaded) {
      return (
        <div>
          <div className="carousel-container">
            {/* rubric02 - The user should see a button that resembles a left arrow key to
the left of the product carousel */}
            <button title="Previous slide" onClick={this.prevSlide}><FontAwesomeIcon icon="chevron-left" /></button>
            {/* Carousel only has a single item for each slide for usability. Too hard to read multiple items on a small viewport. Stacking doesn't look great, may as well make a new slide. */}
            <section className="carousel-slide-container">
              {/* rubric01 - The user should see a product carousel that contains at least 3
slides of products, with each slide having between 1 and 4
product images.  */}
              <article id="slide-1" className="carousel-items active-item">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center">
                    {/* rubric09 - If the user clicks on a product image, they should be taken to a
product page that is populated with the details of the clicked
product  */}
                    <Link to={'/product?name=' + toTitleCase(this.props.productList[0].name, '-', ' ', 'lower')} className="carousel__image-link"><img src={this.props.productList[0].imagelink} alt="..." /></Link>
                  </div>
                  <div className="col-lg-6 carousel-text">
                    <Link to={'/product?name=' + toTitleCase(this.props.productList[0].name, '-', ' ', 'lower')} ><p><span className="lead">This is our best special yet!</span> <br />This high-quality baby bib will make your child really feel the love. Come in and buy one today.
            <br /><strong>Only ${this.props.productList[0].price}</strong></p></Link>
                  </div>
                </div>
              </article>

              <article id="slide-2" className="carousel-items">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center">
                    {/* rubric09 - If the user clicks on a product image, they should be taken to a
product page that is populated with the details of the clicked
product  */}
                    <Link to={'/product?name=' + toTitleCase(this.props.productList[64].name, '-', ' ', 'lower')} className="carousel__image-link"><img src={this.props.productList[64].imagelink} alt="..." /></Link>
                  </div>
                  <div className="col-lg-6 carousel-text">
                    <Link to={'/product?name=' + toTitleCase(this.props.productList[64].name, '-', ' ', 'lower')} ><p><span className="lead">It's milk.</span> <br />Okay, do I really have to sell you on milk? <br />Cookies. Cereal. Nice cold glass. Whatever. It's milk.
            <br /><strong>Only ${this.props.productList[64].price}</strong></p></Link>
                  </div>
                </div>
              </article>

              <article id="slide-3" className="carousel-items">
                <div className="row">
                  <div className="col-xs-12 col-lg-6 d-flex justify-content-center">
                    {/* rubric09 - If the user clicks on a product image, they should be taken to a
product page that is populated with the details of the clicked
product  */}
                    <Link to={'/product?name=' + toTitleCase(this.props.productList[92].name, '-', ' ', 'lower')} className="carousel__image-link"><img src={this.props.productList[92].imagelink} alt="..." /></Link>
                  </div>
                  <div className="col-xs-12 col-lg-6 carousel-text">

                    <Link to={'/product?name=' + toTitleCase(this.props.productList[92].name, '-', ' ', 'lower')}>
                      <p><span className="lead">Lean, green, and delicious!</span> <br />Don't be afraid of these beautiful green vegetables. <br /><span className="text-muted">(Jim, I swear to god if you keep over-ordering these, I'll fire you).</span>
                        <br /><strong>Only ${this.props.productList[92].price}</strong></p>
                    </Link>
                  </div>
                </div>
              </article>
            </section>
            {/* rubric03 - The user should see a button that resembles a right arrow key to
the right of the product carousel */}
            <button title="Next slide" onClick={this.nextSlide}><FontAwesomeIcon icon="chevron-right" /></button>
          </div>


          <div className="d-flex justify-content-end mt-3">
            {/* rubric06 - The user should see a toggle switch labeled “Toggle Slide Show”  */}
            <div className="form-group form-check">
              <input onChange={this.handleChange} type="checkbox" className="form-check-input" id="pauseSlideShow" />
              <label className="form-check-label" htmlFor="pauseSlideShow">Toggle slideshow</label>
            </div>
          </div>
        </div >
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