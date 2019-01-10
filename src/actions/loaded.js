import {
  LOADED
} from '../constants/constants'

const loaded = (bool) => {
  return {
    type: LOADED,
    isLoaded: bool
  }
};

export default loaded;