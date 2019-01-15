import {
  combineReducers
} from "redux";
import {
  GET_DATA,
  LOADED,
  // CHANGE_CATEGORY,
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
//don't need currentCategory anymore
// const currentCategory = (state = { category: { name: null }, subcategory: { name: null, index: null } }, action) => {
//   switch (action.type) {
//     case CHANGE_CATEGORY:

//       // const checkCase = (str, type) => {
//       //   if (str.indexOf('-') === -1) {
//       //     return action.data.type.name;
//       //   } else {
//       //     return str.split('-').map(item => item[0].toUpperCase() + item.slice(1, item.length)).join(' ');
//       //   }
//       // }

//       let catName = action.data.category.name;
//       let subCatName = action.data.subcategory.name;

//       const newState = {

//         category: {
//           name: catName
//         },
//         subcategory: {
//           name: subCatName,
//           index: action.data.subcategory.index
//         }
//       }
//       return state = newState;

//     default:
//       return state;
//   }
// }

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
  // currentCategory,
  cart,
  productList
});

export default reducer;