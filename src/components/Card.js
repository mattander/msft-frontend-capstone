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
      <Link to={"/shop/" + props.itemData.category.toLowerCase().split(' ').join('-')} className="card item-card">
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
      <Link to={"/shop/" + props.categoryInfo.category.toLowerCase().split(' ').join('-') + '/' + props.itemData.name.toLowerCase().split(' ').join('-')} className="card item-card">
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
      <Link to={"/shop/" + props.categoryInfo.category.toLowerCase().split(' ').join('-') + "/" + props.categoryInfo.subcategory.toLowerCase().split(' ').join('-') + "/" + props.itemData.name.toLowerCase().split(' ').join('-')} className="card item-card product-card">
        <div className="card-body">
          <img src={props.itemData.imagelink} alt={props.itemData.name} className="card-img-top" />
          <h5 className="card-title">{props.itemData.name}</h5>
          <small>${props.itemData.price.toFixed(2)}</small>
          <p className="card-text">{props.itemData.description}</p>
          <button onClick={(e) => addCartHandler(e)} className="btn btn-primary">Add to cart</button>
        </div>
      </Link>
    )
  }
}

export default Card;