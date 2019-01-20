import { connect } from 'react-redux';
import Product from '../components/Product';
import cartAddItem from '../actions/cartAddItem';

const mapStateToProps = (state, ownProps) => {
  const toTitleCase = (str, joiner = ' ', seperator = '-') => {
    // if sep is dashes and there are spaces, make them dashes
    if (seperator === '-' && str.indexOf(' ')) {
        const strCopy = str.split(' ').join('-')
        return strCopy.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else if (seperator === ' ' && str.indexOf('-')) {
    // if sep is spaces and there are dashes, make them spaces
        const strCopy = str.split('-').join(' ')
        return strCopy.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else {
        return str.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    }
  }

  return {
    data: state.shopData[0],
    loaded: state.loaded,
    categoryName: toTitleCase(ownProps.match.params.category, ' '),
    subcategoryName: toTitleCase(ownProps.match.params.subcategory, ' '),
    productName: toTitleCase(ownProps.match.params.product, ' ')
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
