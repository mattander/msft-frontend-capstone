import React from 'react';
import CarouselTracker from '../components/CarouselTracker';
import Carousel from '../components/Carousel';

const CarouselContainer = () => {
  return (
    <div className='container'>
      <h2>Carousel Container</h2>
      <Carousel />
      <CarouselTracker />
    </div>
  )
}

export default CarouselContainer;