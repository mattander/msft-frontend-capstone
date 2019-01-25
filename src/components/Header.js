import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartIconContainer from '../containers/CartIconContainer';

const Header = () => {
  return (
    <header>
      {/* rubric68 - The header bar should always be at the top of the page - fixed-top class */}
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        {/* rubric65 - User shall see a link to the home page */}
        <div className="container">
          {/* rubric69 - Clicking the home page link should take the user to the home page  */}
          <Link className="navbar-brand" to="/">WorldWideImporters</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            Menu
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* rubric66 - User shall see a link to the shopping page */}
                {/* rubric70 - Clicking the shopping page link should take the user to the shopping page  */}
                <NavLink activeClassName="active" className="nav-link" to="/shopping">Shop all</NavLink>
              </li>
              <li className="nav-item">
                {/* rubric67 -User shall see a link to the cart page */}
                {/* rubric71 - Clicking the cart page link should take the user to the cart page */}
                <CartIconContainer />
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header;