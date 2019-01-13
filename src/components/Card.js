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
      <Link onClick={(e) => props.onCategoryChange({
        category: {
          name: props.itemData.category
        },
        subcategory: {
          name: null,
          index: null
        }
      })} to={"?category=" + props.itemData.category.split(' ').join('-')} className="card category-card">
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
      <Link onClick={(e) => props.onCategoryChange({
        category: {
          name: props.currentCategory.category.name
        },
        subcategory: {
          name: props.itemData.name,
          index: props.itemIndex
        }
      })} to={"?category=" + props.itemData.name.split(' ').join('-')} className="card category-card">
        <div className="card-body">
          <h5 className="card-title">{props.itemData.name}</h5>
          <p className="card-text">There are {props.itemData.items.length} items for sale in this section.</p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={"?product=" + props.itemData.name.split(' ').join('-')} className="card category-card">
        <div className="card-body">
          <img src={props.itemData.imagelink} alt={props.itemData.name} className="card-img-top" />
          <h5 className="card-title">{props.itemData.name}</h5>
          <small>${props.itemData.price.toFixed(2)}</small>
          <p className="card-text">{props.itemData.description}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </Link>
    )
  }
}

export default Card;