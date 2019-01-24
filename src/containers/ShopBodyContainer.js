import { connect } from 'react-redux';
import ShopBody from '../components/ShopBody';
import cartAddItem from '../actions/cartAddItem';
import { toTitleCase } from '../constants/constants';

const mapStateToProps = (state, ownProps) => {

  return {
    data: state.shopData[0],
    loaded: state.loaded,
    productList: state.productList,
    filters: state.filters,
    categoryInfo: ownProps.categoryInfo,
    history: ownProps.history,
    category: ownProps.categoryInfo.category ? toTitleCase(ownProps.categoryInfo.category, ' ', '-') : null,
    subcategory: ownProps.categoryInfo.subcategory ? toTitleCase(ownProps.categoryInfo.subcategory, ' ', '-') : null
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
