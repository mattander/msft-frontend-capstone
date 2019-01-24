import { connect } from 'react-redux';
import FilterBar from '../components/FilterBar';
import updateFilters from '../actions/updateFilters';
import { toTitleCase } from '../constants/constants';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    categoryInfo: ownProps.categoryInfo,
    subcategory: toTitleCase(ownProps.categoryInfo.subcategory)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: newFilters => {
      dispatch(updateFilters(newFilters));
    }
  };
};

const FilterBarContainer = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBarContainer;
