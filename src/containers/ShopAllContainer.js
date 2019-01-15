import { connect } from 'react-redux';
import ShopAllLink from '../components/ShopAllLink.js';
import changeCategory from '../actions/changeCategory';

const mapStateToProps = state => {
  return {
    category: state.currentCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCategoryChange: newCategory => {
      dispatch(changeCategory(newCategory));
    }
  };
};

const CartIconContainer = connect(mapStateToProps, mapDispatchToProps)(ShopAllLink);

export default CartIconContainer;
