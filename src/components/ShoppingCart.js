import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
  let cartTotal = 0;
  props.cart.forEach(item => {
    cartTotal = cartTotal + item.quantity;
  });
  if (cartTotal === 0) {
    return (
      <div>
        <section className="row">
          <div className="col">
            <h2>Cart Items</h2>
            <p>There's nothing in your cart. Better get shopping!</p>
          </div>
          <div className="col">
            <h2>Cart Summary</h2>
          </div>
        </section>
        <Link className="btn btn-primary" to="/shop">Continue shopping</Link>
      </div>
    )
  } else {
    const items = props.cart.map((item, index) => {
      console.log(item);
      return (
        <div className="card-body">
          <h5>{item.name}</h5>
          <p>${item.item.price.toFixed(2)}</p>
          <p>Quantity{item.quantity}</p>
        </div>
      )
    });

    return (
      <div>
        <section className="row">
          <div className="col">
            <h2>Cart Items</h2>
            <div className="card">
              {items}
            </div>
          </div>
          <div className="col">
            <h2>Cart Summary</h2>
          </div>
        </section>
        <Link className="btn btn-primary" to="/shop">Continue shopping</Link>
      </div>
    )
  }
}

export default ShoppingCart;