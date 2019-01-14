import { connect } from 'react-redux';
import ShopBody from '../components/ShopBody';
import changeCategory from '../actions/changeCategory';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = state => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    currentCategory: state.currentCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCategoryChange: newCategory => {
      dispatch(changeCategory(newCategory));
    },
    onCartAddItem: item => {
      dispatch(cartAddItem(item));
    }
  };
};

const CategorySidebarContainer = connect(mapStateToProps, mapDispatchToProps)(ShopBody);

export default CategorySidebarContainer;
