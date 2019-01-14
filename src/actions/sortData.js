import {
    SORT_DATA
} from '../constants/constants'

const sortData = (data) => {
    return {
        type: SORT_DATA,
        data: data
    }
};

export default sortData;