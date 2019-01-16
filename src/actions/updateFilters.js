import {
  UPDATE_FILTERS
} from '../constants/constants'

const updateFilters = (data) => {
  return {
    type: UPDATE_FILTERS,
    data: data
  }
};

export default updateFilters;