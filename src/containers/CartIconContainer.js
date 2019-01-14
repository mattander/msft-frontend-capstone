import { connect } from 'react-redux';
import CartIcon from '../components/CartIcon.js';

const mapStateToProps = state => {
  return {
    cartItems: state.cart
  };
};

const CartIconContainer = connect(mapStateToProps)(CartIcon);

export default CartIconContainer;
