import React from 'react';
import CarouselContainer from '../containers/CarouselContainer';
import CarouselTracker from './CarouselTracker';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <CarouselContainer />
      <CarouselTracker />
    </div>
  );
};

export default Home;