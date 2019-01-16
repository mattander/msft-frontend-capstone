import { connect } from 'react-redux';
import CateogrySidebar from '../components/CategorySidebar';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.shopData[0],
    loaded: state.loaded
  };
};

const CategorySidebarContainer = connect(mapStateToProps)(CateogrySidebar);

export default CategorySidebarContainer;
