import {
  combineReducers
} from "redux";
import {
  GET_DATA,
  LOADED,
  UPDATE_FILTERS,
  CART_ADD_ITEM,
  SORT_DATA
} from '../constants/constants';


const shopData = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      const newState = [...state, action.data];
      return newState;

    default:
      return state;
  }
}

const productList = (state = [], action) => {
  switch (action.type) {
    case SORT_DATA:
      let listOfItems = [];
      action.data.forEach(item => {
        return item.subcategories.forEach(subItem => {
          return subItem.items.forEach(subItem2 => {
            listOfItems.push(subItem2);
            return subItem2;
          });
        });
      });
      const newState = [...state, ...listOfItems];
      return newState;

    default:
      return state;
  }
}

const loaded = (state = false, action) => {
  switch (action.type) {
    case LOADED:
      return state = true;

    default:
      return state;
  }
}

const cart = (state = [], action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const match = state.findIndex(item => {
        return item.name === action.data.name;
      });
      if (match === -1) {
        //item isn't in the cart yet
        const newState = [...state, action.data];
        return newState;
      } else {
        //item is in cart
        let newState = [...state];
        newState[match].quantity++;
        return newState;
      }
    default:
      return state;
  }
}

const filters = (state = { inStockOnly: false, testFilter: 'alpha' }, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      const newState = {
        [action.data.filter]: action.data.state
      }
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

const reducer = combineReducers({
  shopData,
  loaded,
  filters,
  cart,
  productList
});

export default reducer;