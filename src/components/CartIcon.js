import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const CartIcon = (props) => {
  let cartTotal = 0;
  props.cartItems.forEach(item => {
    cartTotal = cartTotal + item.quantity;
  });
  return (
    <NavLink activeClassName="active" className="nav-link" to="/shopping-cart">
      <FontAwesomeIcon icon="shopping-cart" /> Cart {cartTotal}
    </NavLink>
  )
}

export default CartIcon;