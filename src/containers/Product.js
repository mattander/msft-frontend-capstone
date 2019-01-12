import React from 'react';
import ProductImage from '../components/ProductImage';
import ProductDetails from './ProductDetails';

const Product = () => {
  return (
    <div>
      <h2>Product Detail</h2>
      <section className="row">
        <div className="col">
          <ProductImage />
        </div>
        <div className="col">
          <ProductDetails />
        </div>
      </section>
    </div>
  );
}

export default Product;