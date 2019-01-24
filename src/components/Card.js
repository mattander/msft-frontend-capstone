import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  if (props.itemType === 'category') {
    const subCategoryList = props.itemData.subcategories.map(item => {
      return (
        <li key={'subCat-' + item.name.split(' ').join('')}>{item.name}</li>
      )
    })
    return (
      <Link to={"/shopping/" + props.itemData.category.toLowerCase().split(' ').join('-')} className="card item-card">
        <div className="card-body">
          <h5 className="card-title">{props.itemData.category}</h5>
          <p className="card-text">Includes products for:</p>
          <ul>
            {subCategoryList}
          </ul>
        </div>
      </Link>
    );
  } else if (props.itemType === 'subCategory') {
    return (
      <Link to={"/shopping/" + props.categoryInfo.category.toLowerCase().split(' ').join('-') + '/' + props.itemData.name.toLowerCase().split(' ').join('-')} className="card item-card">
        <div className="card-body">
          <h5 className="card-title">{props.itemData.name}</h5>
          <p className="card-text">There are {props.itemData.items.length} items for sale in this section.</p>
        </div>
      </Link>
    )
  } else if (props.itemType === 'product') {
    //have to write a handler to override the Link behaviour due to a react router bug. When you click an element with an onClick this is the child of a <Link/>, the Link's onClick fires at the same time. 

    const addCartHandler = (e) => {
      e.preventDefault();
      props.onCartAddItem({
        name: props.itemData.name,
        quantity: 1,
        item: props.itemData
      })
    }
    return (
      // rubric31 - If the user clicks on a product image within a grid cell, they should be taken to a product page that is populated with the details of the clicked product
      // rubric32 - If the user clicks on a product name within a grid cell, they should be taken to a product page that is populated with the details of the clicked product 
      <Link to={"/product?name=" + props.itemData.name.toLowerCase().split(' ').join('-')} className="card item-card product-card">
        <div className="card-body">
          {/* rubric23 - Each grid cell shall have an image of the product displayed  */}
          <img src={props.itemData.imagelink} alt={props.itemData.name} className="card-img-top" />
          {/* rubric21 - Each grid cell shall have the name of the product displayed */}
          <h5 className="card-title">{props.itemData.name}</h5>
          {/* rubric22 - Each grid cell shall have the price of the product displayed  */}
          <small>${props.itemData.price.toFixed(2)}</small>

          <p className="text-muted">Rating: {props.itemData.rating}/5</p>
          <p className="card-text">{props.itemData.description}</p>
          {/* rubric24 - Each grid cell shall have a button labeled “Add” */}
          {/* rubric30 - Clicking on the “Add” button inside a grid cell should add 1 unit of
the associated product to the shopping cart  */}
          <button onClick={(e) => addCartHandler(e)} className="btn btn-primary">Add to cart</button>
        </div>
      </Link>
    )
  }
}

export default Card;