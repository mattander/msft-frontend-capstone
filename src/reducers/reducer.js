import {
  combineReducers
} from "redux";
import {
  GET_DATA,
  LOADED,
  CHANGE_CATEGORY
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

// const currentCategory = (state = 'all', action) => {
//   switch (action.type) {
//     case CHANGE_CATEGORY:
//       return state = action.data;

//     default:
//       return state;
//   }
// }

const reducer = combineReducers({
  shopData,
  loaded,
  currentCategory
});

export default reducer;