import React from 'react';
import CategorySidebarContainer from '../containers/CategorySidebarContainer';
import ShopBodyContainer from '../containers/ShopBodyContainer';

const Shop = (props) => {
  return (
    <section className="container">
      <div className="row mt-4">
        <div className="col-md-3">
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