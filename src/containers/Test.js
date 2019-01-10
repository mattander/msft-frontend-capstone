import { connect } from 'react-redux';
import TestPres from '../components/TestPres';

const mapStateToProps = state => {
  return {
    data: state.shopData[0],
    loaded: state.loaded
  };
};

const Test = connect(mapStateToProps, null)(TestPres);

export default Test;