import { connect } from 'react-redux';
import ShopBody from '../components/ShopBody';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    currentCategory: state.currentCategory,
    productList: state.productList,
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
