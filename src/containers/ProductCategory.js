import React from 'react';
import FilterContainer from './FilterContainer';
import CategorySidebar from './CategorySidebar';
import Cards from '../components/Cards';

const ProductCategory = () => {
  return (
    <div>
      <h2>Product Category</h2>
      <section className="row">
        <div className="col">
          <FilterContainer />
        </div>
      </section>
      <section className="row">
        <div className="col-md-2">
          <CategorySidebar />
        </div>
        <div className="col-md-10">
          <Cards />
        </div>
      </section>
    </div>
  )
}

export default ProductCategory;