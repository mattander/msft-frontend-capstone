import {
  combineReducers
} from "redux";
import {
  GET_DATA,
  LOADED,
  CHANGE_CATEGORY,
  CART_ADD_ITEM
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

const loaded = (state = false, action) => {
  switch (action.type) {
    case LOADED:
      return state = true;

    default:
      return state;
  }
}

const currentCategory = (state = { category: { name: 'all' }, subcategory: { name: null, index: null } }, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      const newState = {
        category: {
          name: action.data.category.name
        },
        subcategory: {
          name: action.data.subcategory.name,
          index: action.data.subcategory.index
        }
      }
      return state = newState;

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

const reducer = combineReducers({
  shopData,
  loaded,
  currentCategory,
  cart
});

export default reducer;