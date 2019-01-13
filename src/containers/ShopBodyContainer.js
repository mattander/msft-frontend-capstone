import { connect } from 'react-redux';
import ShopBody from '../components/ShopBody';
import changeCategory from '../actions/changeCategory';

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
    }
  };
};

const CategorySidebarContainer = connect(mapStateToProps, mapDispatchToProps)(ShopBody);

export default CategorySidebarContainer;
