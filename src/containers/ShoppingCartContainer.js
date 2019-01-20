import { connect } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart.js';
import cartRemoveItem from '../actions/cartRemoveItem';
import cartUpdateItem from '../actions/cartUpdateItem';

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cartRemoveItem: changes => {
      dispatch(cartRemoveItem(changes));
    },
    cartUpdateItem: changes => {
      dispatch(cartUpdateItem(changes));
    }
  };
};

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default ShoppingCartContainer;
