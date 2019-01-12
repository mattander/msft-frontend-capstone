import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        {/* rubric65 - home link in header*/}
        <Link className="navbar-brand" to="/">WorldWideImporters</Link>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* rubric66 - shopping link in header*/}
                <NavLink activeClassName="active" className="nav-link" to="/category">Shop all</NavLink>
              </li>
              <li className="nav-item">
                {/* rubric67 - cart link in header*/}
                <NavLink activeClassName="active" className="nav-link" to="/shopping-cart"><FontAwesomeIcon icon="shopping-cart" /> Cart (0)</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header;