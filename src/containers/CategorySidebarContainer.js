import { connect } from 'react-redux';
import CateogrySidebar from '../components/CategorySidebar';
import changeCategory from '../actions/changeCategory';

const mapStateToProps = state => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    category: state.currectCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCategoryChange: newCategory => {
      dispatch(changeCategory(newCategory));
    }
  };
};

const CategorySidebarContainer = connect(mapStateToProps, mapDispatchToProps)(CateogrySidebar);

export default CategorySidebarContainer;
