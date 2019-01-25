import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              {/* rubric73 - User shall see a link to the home page  */}
              {/* rubric76 - Clicking on the home page link should take the user to the home page  */}
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              {/* rubric74 - User shall see a link to the about page */}
              {/* rubric77 - Clicking on the about page link should take the user to the about page */}
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              {/* rubric75 - User shall see a link to the contact page */}
              {/* rubric78 - Clicking on the contact page link should take the user to the contact page  */}
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;