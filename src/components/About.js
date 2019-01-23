import React from 'react';
import citrus from '../images/citrus2.jpg';
import groceries from '../images/groceries.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <h1 className="sr-only">About</h1>
      {/* Image credit: Photo by rawpixel on Unsplash */}
      <div className="about__banner container-fluid">
        <div className="inner-text">
          Your Groceries<br />
          <span className="line-2">Reimagined</span>
        </div>
      </div>
      <div className="container about__main-content my-5">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-1">
            <h2>An update for us and for you</h2>

            <p>Our team has been very excited to show you this new product and the time is finally here. Since the moment we sat down at a table and said "we're going to put groceries online!" it has been our number one goal to provide you with the best experience possible.</p>
            <img src={citrus} alt="" className="rounded float-right mt-1 ml-3 mb-1" height="300px" />
            <p>We've taken a look at this process from the ground up, to provide you withe best experience ever. Months of testing, design and hard development work went into this application and we're just getting started.</p>
            <p>We hope you like it, because we definitely do. If you find anything that's not quite right, or if you have some suggestions to make our app better, be sure to visit the <Link to="/contact">Contact page</Link> and choose the "Website feedback" option in our form. We can't wait to hear your feedback and continue to improve this website to meet your needs!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum tempora perspiciatis, et voluptas nobis quisquam quos animi vitae amet similique explicabo, voluptatibus magni mollitia obcaecati laboriosam quaerat pariatur distinctio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro, at dicta ducimus alias accusamus labore harum libero magni. Eum aliquid dignissimos tempora neque delectus eos! Dolorem nobis pariatur at.</p>
            <blockquote className="blockquote">
              <p className="mb-0">This is so well built, I can't think of anything to improve.</p>
              <footer className="blockquote-footer">Albert Einstein speaking to Abraham Lincoln <cite title="Source Title">First visit to this web application.</cite></footer>
            </blockquote>
            <img src={groceries} alt="" className="rounded float-left mt-1 mr-3 mb-1" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur commodi voluptate neque natus est dicta? Repudiandae impedit asperiores incidunt nihil perspiciatis corrupti veritatis cumque quia, error rem delectus voluptatem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi blanditiis cupiditate atque! Iste architecto deserunt tenetur error cupiditate ipsum hic neque corporis, libero voluptatibus esse commodi, reprehenderit a laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam animi sapiente possimus, expedita alias delectus maiores enim provident quos inventore sit nobis esse, soluta amet hic ex eaque at.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam animi sapiente possimus, expedita alias delectus maiores enim provident quos inventore sit nobis esse, soluta amet hic ex eaque at.</p>
            <p><em className="text-muted">- WorldWideImporters Digital Team</em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;