import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toTitleCase } from '../constants/constants';

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
        if (this.state.currentSlide === document.querySelector('.my-carousel-container').children.length) {
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
      }, 6000);

      this.setState({
        carousel: carousel
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.carousel);
  }

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
        if (this.state.currentSlide === document.querySelector('.my-carousel-container').children.length) {
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
      }, 6000);

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

  nextSlide(e) {
    if (this.state.currentSlide === document.querySelector('.my-carousel-container').children.length) {
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

  prevSlide(e) {
    if (this.state.currentSlide === 1) {
      // if we're on the first slide
      document.querySelector('.active-item').classList.remove('active-item');
      document.querySelector('#slide-' + document.querySelector('.my-carousel-container').children.length).classList.add('active-item');
      this.setState({
        currentSlide: (document.querySelector('.my-carousel-container').children.length)
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
      console.log(this.props.data[0].subcategories[0].items[0].imagelink);
      return (
        <div>
          <div className="my-carousel-container">
            {/* Carousel only has a single item for each slide for usability. Too hard to read multiple items on a small viewport. Stacking doesn't look great, may as well make a new slide. */}
            <div id="slide-1" className="my-carousel-item active-item">
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                  <Link to={'/product?name=' + toTitleCase(this.props.productList[0].name, '-', ' ', 'lower')}><img src={this.props.productList[0].imagelink} alt="..." /></Link>
                </div>
                <div className="col-lg-6 carousel-text">
                  <Link to={'/product?name=' + toTitleCase(this.props.productList[0].name, '-', ' ', 'lower')} ><p><span className="lead">This is our best special yet!</span> <br />This high-quality baby bib will make your child really feel the love. Come in and buy one today.
                  <br /><strong>Only ${this.props.productList[0].price}</strong></p></Link>
                </div>
              </div>
            </div>

            <div id="slide-2" className="my-carousel-item">
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                  <Link to={'/product?name=' + toTitleCase(this.props.productList[64].name, '-', ' ', 'lower')}><img src={this.props.productList[64].imagelink} alt="..." /></Link>
                </div>
                <div className="col-lg-6 carousel-text">
                  <Link to={'/product?name=' + toTitleCase(this.props.productList[64].name, '-', ' ', 'lower')} ><p><span className="lead">It's milk.</span> <br />Okay, do I really have to sell you on milk? <br />Cookies. Cereal. Nice cold glass. Whatever. It's milk.
              <br /><strong>Only ${this.props.productList[64].price}</strong></p></Link>
                </div>
              </div>
            </div>

            <div id="slide-3" className="my-carousel-item">
              <div className="row">
                <div className="col-xs-12 col-lg-6 d-flex justify-content-center">
                  <Link to={'/product?name=' + toTitleCase(this.props.productList[92].name, '-', ' ', 'lower')} ><img src={this.props.productList[92].imagelink} alt="..." /></Link>
                </div>
                <div className="col-xs-12 col-lg-6 carousel-text">

                <Link to={'/product?name=' + toTitleCase(this.props.productList[92].name, '-', ' ', 'lower')}>
                    <p><span className="lead">Lean, green, makes your pee smell mean!</span> <br />Don't be afraid of these beautiful green vegetables. <br /><span className="text-muted">(Jim, I swear to god if you keep over-ordering these, I'll fire you).</span>
                    <br /><strong>Only ${this.props.productList[92].price}</strong></p>
                </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-end mt-3">
            <div className="form-group form-check">
              <input onChange={this.handleChange} type="checkbox" className="form-check-input" id="pauseSlideShow" />
              <label className="form-check-label" htmlFor="pauseSlideShow">Pause slideshow</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button onClick={this.prevSlide} className="mr-2 btn btn-outline-primary">Prev</button> <button onClick={this.nextSlide} className="ml-2 btn btn-outline-primary">Next</button>
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