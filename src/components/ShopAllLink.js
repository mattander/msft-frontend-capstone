import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopAllLink = (props) => {
  return (
    <NavLink activeClassName="active" className="nav-link" to="/shopping">Shop all</NavLink>
  )
}

export default ShopAllLink;