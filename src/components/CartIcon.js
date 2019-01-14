import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartIcon = (props) => {
  let cartTotal = 0;
  props.cartItems.forEach(item => {
    cartTotal = cartTotal + item.quantity;
  });
  return (
    <span>
      <FontAwesomeIcon icon="shopping-cart" /> Cart {cartTotal}
    </span>
  )
}

export default CartIcon;