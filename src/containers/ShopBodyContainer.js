import { connect } from 'react-redux';
import ShopBody from '../components/ShopBody';
import cartAddItem from '../actions/cartAddItem';
import { toTitleCase } from '../constants/constants';

const mapStateToProps = (state, ownProps) => {
  const filterItems = (items) => {
    let filteredList = items;
    if (state.filters.sortBy) {
      if (state.filters.sortBy === 'lowToHigh') {
        const listCopy = filteredList.sort((a, b) => a.price - b.price);
        filteredList = listCopy;
      } else if (state.filters.sortBy === 'highToLow') {
        const listCopy = filteredList.sort((a, b) => b.price - a.price);
        filteredList = listCopy;
      } else if (state.filters.sortBy === 'aToZ') {
        const listCopy = filteredList.sort((a, b) => {
          if (a.name.toString() < b.name.toString()) {
            return -1;
          } else {
            return 1;
          }
        });
        filteredList = listCopy;
      } else if (state.filters.sortBy === 'zToA') {
        const listCopy = filteredList.sort((a, b) => {
          if (a.name.toString() > b.name.toString()) {
            return -1;
          } else {
            return 1;
          }
        });
        filteredList = listCopy;
      } else if (state.filters.sortBy === 'ratingHighToLow') {
        const listCopy = filteredList.sort((a, b) => {
          if (parseInt(b.rating) <= parseInt(a.rating)) {
            return -1;
          } else {
            return 1;
          }
        });
        filteredList = listCopy;
      } else if (state.filters.sortBy === 'ratingLowToHigh') {
        const listCopy = filteredList.sort((a, b) => {
          if (parseInt(a.rating) <= parseInt(b.rating)) {
            return -1;
          } else {
            return 1;
          }
        });
        filteredList = listCopy;
      } else {
        filteredList = items;
      }
    }

    if (state.filters.inStockOnly) {
      const listCopy = filteredList.filter(item => item.stock > 0);
      filteredList = listCopy;
    }
    return filteredList;
  };

  const paginate = (list, num) => {
    if (list.length > num) {
      let listOfItems = [];
      if (list.length % num === 0) {
        // list length divided by number per page is 0, perfect divide so subtract one from
        // the for loop limit
        for (let i = 0; i <= parseInt(list.length / num) - 1; i++) {
          const startIndex = num * i;
          const stopIndex = i <= parseInt(list.length / num) - 1 ? num * (i + 1) : list.length;
          listOfItems.push(list.slice(startIndex, stopIndex));
        }
      } else {
        // list length divided by number per page leaves a remainder
        for (let i = 0; i <= parseInt(list.length / num); i++) {
          const startIndex = num * i;
          const stopIndex = i <= parseInt(list.length / num) ? num * (i + 1) : list.length;
          listOfItems.push(list.slice(startIndex, stopIndex));
        }
      }
      return { list: listOfItems, paged: true };
    } else {
      return { list: list, paged: false };
    }
  }

  return {
    data: state.shopData[0],
    loaded: state.loaded,
    productList: state.productList,
    filters: state.filters,
    categoryInfo: ownProps.categoryInfo,
    history: ownProps.history,
    category: ownProps.categoryInfo.category ? toTitleCase(ownProps.categoryInfo.category) : null,
    subcategory: ownProps.categoryInfo.subcategory ? toTitleCase(ownProps.categoryInfo.subcategory) : null,
    filteredItems: ownProps.categoryInfo.subcategory && state.loaded ? (filterItems(state.shopData[0].filter(item => toTitleCase(item.category, ' ') === toTitleCase(ownProps.categoryInfo.category))[0].subcategories.filter(item => item.name === toTitleCase(ownProps.categoryInfo.subcategory))[0].items)) : null,
    itemsList: ownProps.categoryInfo.subcategory && state.loaded ? paginate(filterItems(state.shopData[0].filter(item => toTitleCase(item.category, ' ') === toTitleCase(ownProps.categoryInfo.category))[0].subcategories.filter(item => item.name === toTitleCase(ownProps.categoryInfo.subcategory))[0].items), state.filters.showNumItems) : null
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
