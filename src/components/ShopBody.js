import React from 'react';
import Card from './Card';

const ShopBody = (props) => {
  if (props.loaded) {
    //if no category is chosen, show categories in the item grid
    if (props.currentCategory.category.name === 'all') {
      return (
        <section id="shopBodyContent" className="shopContent-all">
          <p>Pick a category below or in the panel on the left.</p>
          <div className="card-container">
            {props.data.map((item, index) => {
              return (
                <Card onCategoryChange={props.onCategoryChange} key={'category-' + item.category} itemData={item} itemType="category" />
              )
            })}
          </div>
        </section>
      )
    } else if (props.currentCategory.subcategory.name === null) {
      return (
        <section id="shopBodyContent" className="shop-content__no-sub-cat">
          <h3>Subcategories in {props.currentCategory.category.name}</h3>
          <p>Pick a subcategory</p>
          <div className="card-container">
            {props.data.filter((item) => item.category === props.currentCategory.category.name)[0].subcategories.map((item, index) => {
              return (
                <Card onCategoryChange={props.onCategoryChange} key={'subcategory-' + item.name} itemData={item} itemIndex={index} itemType="subCategory" currentCategory={props.currentCategory} />
              )
            })}
          </div>
        </section>
      )
    } else {
      const itemsList = props.data.filter(item => item.category === props.currentCategory.category.name)[0].subcategories[props.currentCategory.subcategory.index].items;
      if (itemsList.length === 0) {
        return (
          <section id="shopBodyContent" className="p-5">
            <p className="lead">Sorry, it looks like we don't have any products in this category right now.</p>
            <p className="lead">Look in a different category to see what we have for sale.</p>
          </section>
        );
      } else {
        return (
          <section id="shopBodyContent">
            <div className="container-fluid">Showing {itemsList.length} of {itemsList.length} items in {props.currentCategory.subcategory.name}</div>
            <div className="card-container">
              {itemsList.map((item, index) => {
                return (
                  <Card onCartAddItem={props.onCartAddItem} key={'product-' + item.name} itemData={item} itemIndex={index} itemType="product" currentCategory={props.currentCategory} />
                )
              })}
            </div>
          </section>
        );
      }
    }
  } else {
    return <p>Loading...</p>
  }
};

export default ShopBody;