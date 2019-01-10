import {
  combineReducers
} from "redux";
import {
  GET_DATA,
  LOADED
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

const reducer = combineReducers({
  shopData,
  loaded
});

export default reducer;