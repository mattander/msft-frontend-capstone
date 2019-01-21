import React from 'react';
import CarouselContainer from '../containers/CarouselContainer';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      
      <div className="welcome-paragraph mb-4">
      <p className="lead">Welcome to our new online store! We hope you find what you're looking for</p>
      <Link className="btn btn-primary" to="/shop">Start shopping!</Link>
      </div>
      <CarouselContainer />
    </div>
  );
};

export default Home;