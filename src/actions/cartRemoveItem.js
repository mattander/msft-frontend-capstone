import {
  CART_REMOVE_ITEM
} from '../constants/constants'

const cartRemoveItem = (data) => {
  return {
    type: CART_REMOVE_ITEM,
    data: data
  }
};

export default cartRemoveItem;