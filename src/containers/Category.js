import React from 'react';
import CategorySidebar from './CategorySidebar';
import CategoryBody from './CategoryBody';

const Category = () => {
  return (
    <div>
      <h1>Cateogry</h1>
      <section className="row">
        <div className="col-md-2">
          <CategorySidebar />
        </div>
        <div className="col-md-10">
          <CategoryBody />
        </div>
      </section>
    </div>
  )
}

export default Category;