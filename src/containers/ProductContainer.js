import { connect } from 'react-redux';
import Product from '../components/Product';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.shopData[0],
    loaded: state.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: newFilters => {
      dispatch(cartAddItem(newFilters));
    }
  };
};

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
