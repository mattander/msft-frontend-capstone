import {
  CART_UPDATE_ITEM
} from '../constants/constants'

const cartUpdateItem = (data) => {
  return {
    type: CART_UPDATE_ITEM,
    data: data
  }
};

export default cartUpdateItem;