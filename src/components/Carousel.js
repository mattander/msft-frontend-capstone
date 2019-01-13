import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = props => {
  // Make sure the data is loaded before rendering the component
  if (props.loaded) {
    // const categories = props.data.map((el) => <h4>{el.category}</h4>);
    console.log(props.data[0].subcategories[0].items[0]['imagelink']);
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
              <img src={props.data[0].subcategories[0].items[0].imagelink} alt="..." />
            </article>
            <article className="carousel-item">
              <img src={props.data[0].subcategories[0].items[1].imagelink} alt="..." />
            </article>
            <article className="carousel-item">
              <img src={props.data[0].subcategories[0].items[2].imagelink} alt="..." />
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

      </div>
    );
  } else {
    return (
      <p>Loading...</p>
    );
  }
};

export default Carousel;