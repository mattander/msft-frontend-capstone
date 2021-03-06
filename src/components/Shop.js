import React from 'react';
import CategorySidebarContainer from '../containers/CategorySidebarContainer';
import ShopBodyContainer from '../containers/ShopBodyContainer';

const Shop = (props) => {
  return (
    <section className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          {/* rubric19 - The user shall see a category menu that displays all of the
available shopping categories */}
          <CategorySidebarContainer />
        </div>
        <div className="col-md-9">
          <ShopBodyContainer categoryInfo={props.match.params} history={props.history} />
        </div>
      </div>
    </section>
  );
};

export default Shop;