import { connect } from 'react-redux';
import ShopBody from '../components/ShopBody';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    productList: state.productList,
    filters: state.filters,
    categoryInfo: ownProps.categoryInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCartAddItem: item => {
      dispatch(cartAddItem(item));
    }
  };
};

const CategorySidebarContainer = connect(mapStateToProps, mapDispatchToProps)(ShopBody);

export default CategorySidebarContainer;
