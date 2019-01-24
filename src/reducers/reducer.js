import {
  combineReducers
} from "redux";
import {
  GET_DATA,
  LOADED,
  UPDATE_FILTERS,
  CART_ADD_ITEM,
  SORT_DATA,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM
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
  const sortAlpha = (a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  }

  switch (action.type) {
    case CART_ADD_ITEM: {
      if (action.data.quantity <= 0) {
        // if the quantity is 0
        return [...state];
      } else {
        // if the quantity is more than 0
        const match = [...state].findIndex(item => {
          return item.name === action.data.name;
        });

        if (match === -1) {
          //item isn't in the cart yet
          const newState = [...state, action.data];
          return newState.sort(sortAlpha);
        } else {
          //item is in cart
          let newState = [...state];
          newState[match].quantity = parseInt(newState[match].quantity) + parseInt(action.data.quantity);
          return newState.sort(sortAlpha);
        }
      }
    }
    case CART_REMOVE_ITEM: {
      //Find the item in the cart data and remove it. No need for checks, this only gets called if the item is already in the cart
      const newState = state.filter(item => item.name !== action.data.name).sort(sortAlpha);
      return newState;
    }
    case CART_UPDATE_ITEM: {
      //Find the item in the cart and update it's quantity
      const updatedItem = Object.assign({}, state.filter(item => item.name === action.data.name)[0], { quantity: action.data.quantity });
      const newState = [...state.filter(item => item.name !== action.data.name), updatedItem]
      return newState.sort(sortAlpha);
    }
    default:
      return state;
  }
}

const filters = (state = { inStockOnly: false, sortBy: 'lowToHigh', showNumItems: 6 }, action) => {
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