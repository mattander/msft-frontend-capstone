import {
  GET_DATA
} from '../constants/constants'

const getData = (data) => {
  return {
    type: GET_DATA,
    data: data
  }
};

export default getData;