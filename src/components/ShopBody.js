import React from 'react';
import Card from './Card';
import FilterBarContainer from '../containers/FilterBarContainer';
import { Redirect } from 'react-router-dom';
import { toTitleCase } from '../constants/constants';

const ShopBody = (props) => {
  if (props.loaded) {
    if (props.categoryInfo.subcategory) {
      const cat = toTitleCase(props.categoryInfo.category, ' ');
      const subcat = toTitleCase(props.categoryInfo.subcategory, ' ');

      if (props.data.filter(item => toTitleCase(item.category, ' ') === cat)[0].subcategories.filter(item => item.name === subcat).length === 0) {
        //invalid subcategory in url
        return <Redirect to="/404" />
      } else {
        //valid category
        const itemsList = props.data.filter(item => toTitleCase(item.category, ' ') === cat)[0].subcategories.filter(item => item.name === subcat)[0].items;

        const filterItems = (items) => {
          let filteredList = items;

          if (props.filters.sortBy) {
            if (props.filters.sortBy === 'lowToHigh') {
              const listCopy = filteredList.sort((a, b) => a.price - b.price);
              filteredList = listCopy;
            } else {
              const listCopy = filteredList.sort((a, b) => b.price - a.price);
              filteredList = listCopy;
            }
          }

          if (props.filters.inStockOnly) {
            const listCopy = filteredList.filter(item => item.stock > 0);
            filteredList = listCopy;
          }
          return filteredList;
        };

        const filteredItems = filterItems(itemsList);

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

        if (filteredItems.length === 0) {
          return (
            <section id="shopBodyContent" className="p-5">
              <p className="lead">Sorry, it looks like we don't have any products in this category right now.</p>
              <p className="lead">Look in a different category to see what we have for sale.</p>
            </section>
          );
        } else {
          return (
            <section id="shopBodyContent" className="container-fluid">
              <FilterBarContainer itemsList={itemsList} filteredItemsList={filteredItems} categoryInfo={props.categoryInfo} />
              <div className="card-container">
                {filteredItems.map((item, index) => {
                  return (
                    <Card onCartAddItem={props.onCartAddItem} key={'product-' + item.name} itemData={item} itemIndex={index} itemType="product" categoryInfo={props.categoryInfo} history={props.history} />
                  )
                })}
              </div>
            </section>
          );
        }
      }

    } else if (props.categoryInfo.category) {
      //Only category is provided
      const cat = toTitleCase(props.categoryInfo.category, ' ');

      if (props.data.filter((item) => item.category === cat).length === 0) {
        //invalid category
        return <Redirect to="/404" />;
      } else {
        //valid category
        return (
          <section id="shopBodyContent" className="shop-content__no-sub-cat">
            <h3>Subcategories in {cat}</h3>
            <p>Pick a subcategory</p>
            <div className="card-container">
              {props.data.filter((item) => item.category === cat)[0].subcategories.map((item, index) => {
                return (
                  <Card key={'subcategory-' + item.name} itemData={item} itemIndex={index} itemType="subCategory" categoryInfo={props.categoryInfo} />
                )
              })}
            </div>
          </section>
        )
      }
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
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
};

export default ShopBody;