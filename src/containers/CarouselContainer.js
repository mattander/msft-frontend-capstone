import { connect } from 'react-redux';
import Carousel from '../components/Carousel';

const mapStateToProps = state => {
  return {
    data: state.shopData[0],
    loaded: state.loaded,
    productList: state.productList
  };
};

const CarouselContainer = connect(mapStateToProps)(Carousel);

export default CarouselContainer;
