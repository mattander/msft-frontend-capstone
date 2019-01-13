import React from 'react';
import CategorySidebarContainer from '../containers/CategorySidebarContainer';
import ShopBodyContainer from '../containers/ShopBodyContainer';

const Shop = (props) => {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-3">
          <CategorySidebarContainer />
        </div>
        <div className="col-md-9">
          <ShopBodyContainer />
        </div>
      </div>
    </div>
  );
};

export default Shop;