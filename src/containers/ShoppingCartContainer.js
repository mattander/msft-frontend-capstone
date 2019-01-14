import { connect } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart.js';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCartChange: changes => {
      dispatch(cartAddItem(changes));
    }
  };
};

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default ShoppingCartContainer;
