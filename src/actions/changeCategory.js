import {
  CHANGE_CATEGORY
} from '../constants/constants'

const getData = (data) => {
  return {
    type: CHANGE_CATEGORY,
    data: data
  }
};

export default getData;