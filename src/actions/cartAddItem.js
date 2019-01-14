import {
  CART_ADD_ITEM
} from '../constants/constants'

const cartAddItem = (data) => {
  return {
    type: CART_ADD_ITEM,
    data: data
  }
};

export default cartAddItem;