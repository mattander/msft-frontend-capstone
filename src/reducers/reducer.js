import {
  combineReducers
} from "redux";
import {
  GET_DATA
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

const reducer = combineReducers({
  shopData
});

export default reducer;