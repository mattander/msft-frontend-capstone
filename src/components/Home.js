import React from 'react';
import CarouselContainer from '../containers/CarouselContainer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="container mt-3">
      {/* rubric04 - The user should see some text welcoming them to the website */}
      <div className="welcome-paragraph mb-4">
        <p className="lead">Welcome to our new online store! We hope you find what you're looking for</p>
        {/* rubric05 - The user should see a button labeled “Shop All”  */}
        {/* rubric12 - If the user clicks on the “Shop All” button, the user should be
taken to the shopping page  */}
        <Link className="btn btn-primary" to="/shopping">Shop all</Link>
      </div>
      <CarouselContainer />
    </section>
  );
};

export default Home;