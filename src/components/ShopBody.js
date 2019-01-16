import React from 'react';
import Card from './Card';
import FilterBarContainer from '../containers/FilterBarContainer';

const ShopBody = (props) => {
  const toTitleCase = (str, joiner) => {
    if (str.indexOf('-') !== -1) {
      return str.toLowerCase().split('-').map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else {
      return str.toLowerCase().split(' ').map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    }
  }


  if (props.loaded) {
    console.log(props);
    if (props.categoryInfo.subcategory) {
      //cat and subcat
      const cat = toTitleCase(props.categoryInfo.category, ' ');
      const subcat = toTitleCase(props.categoryInfo.subcategory, ' ');

      const itemsList = props.data.filter(item => toTitleCase(item.category, ' ') === cat)[0].subcategories.filter(item => item.name === subcat)[0].items;

      // Pagination code. Saving this just in case.

      // const paginateItems = (list, itemsPerPage) => {
      //   if (list.length > itemsPerPage) {
      //     let paginatedItemsList = [];
      //     for (let i = 0; i <= parseInt(list.length / itemsPerPage); i++) {
      //       const startIndex = itemsPerPage * i;
      //       const stopIndex = i < parseInt(list.length / itemsPerPage) ? itemsPerPage * (i + 1) : list.length;
      //       paginatedItemsList.push(list.slice(startIndex, stopIndex));
      //     }
      //     return paginatedItemsList;
      //   }
      // }

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
            <FilterBarContainer itemsList={itemsList} categoryInfo={props.categoryInfo} />
            <div className="card-container">
              {itemsList.map((item, index) => {
                return (
                  <Card onCartAddItem={props.onCartAddItem} key={'product-' + item.name} itemData={item} itemIndex={index} itemType="product" currentCategory={props.categoryInfo} />
                )
              })}
            </div>
          </section>
        );
      }

    } else if (props.categoryInfo.category) {
      //just cat
      const cat = toTitleCase(props.categoryInfo.category, ' ');
      return (
        <section id="shopBodyContent" className="shop-content__no-sub-cat">
          <h3>Subcategories in {cat}</h3>
          <p>Pick a subcategory</p>
          <div className="card-container">
            {props.data.filter((item) => item.category === cat)[0].subcategories.map((item, index) => {
              return (
                <Card key={'subcategory-' + item.name} itemData={item} itemIndex={index} itemType="subCategory" currentCategory={props.categoryInfo} />
              )
            })}
          </div>
        </section>
      )
    } else {
      //no category
      return (
        <section id="shopBodyContent" className="shopContent-all">
          <p>Pick a category below or in the panel on the left.</p>
          <div className="card-container">
            {props.data.map((item, index) => {
              return (
                <Card key={'category-' + item.category} itemData={item} itemType="category" />
              )
            })}
          </div>
        </section>
      )
    }
  } else {
    return <p>Loading...</p>
  }
};

export default ShopBody;