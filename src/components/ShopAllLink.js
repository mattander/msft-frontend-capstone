import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopAllLink = (props) => {
  return (
    <NavLink activeClassName="active" className="nav-link" to="/shop" onClick={(e) => props.onCategoryChange({
      category: {
        name: null
      },
      subcategory: {
        name: null,
        index: null
      }
    })}>Shop all</NavLink>
  )
}

export default ShopAllLink;