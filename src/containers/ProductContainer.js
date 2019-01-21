import { connect } from 'react-redux';
import Product from '../components/Product';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    productList: state.productList,
    productName: ownProps.location.search.slice(ownProps.location.search.indexOf('=')+1, ownProps.location.search.length)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCartAddItem: newFilters => {
      dispatch(cartAddItem(newFilters));
    }
  };
};

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
