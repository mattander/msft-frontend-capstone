import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
  console.log(props.cart);
  let cartTotal = 0;
  props.cart.forEach(item => {
    cartTotal = cartTotal + item.quantity;
  });
  if (cartTotal === 0) {
    return (
      <div>
        <section className="row mb-4">
          <article className="col-xs-12 col-md-6">
            <h2>Cart Items</h2>
            <p>There's nothing in your cart. Better get shopping!</p>
          </article>
          <article className="col-xs-12 col-md-6">
            <h2>Cart Summary</h2>
            <p>Nothing in the cart.</p>
          </article>
        </section>
        <Link className="btn btn-primary" to="/shop">Start shopping</Link>
      </div>
    )
  } else {
    const items = props.cart.map((item, index) => {
      return (
        <div className="card-body shopping-cart__item" key={item + index}>
          <div className="d-flex align-items-center mb-2">
            <h5 className="mb-0">{item.name}</h5>
            <button onClick={(e) => {
              props.cartRemoveItem(item)
            }} className="ml-3 btn btn-outline-danger btn-sm">Remove from cart</button>
          </div>
          <p>${item.item.price.toFixed(2)}</p>
          <p><input onChange={(e) => {
            props.cartUpdateItem({
              name: item.name,
              quantity: parseInt(e.target.value)
            });
          }} id="itemQuantity" type="number" min="1" max={item.item.stock} defaultValue={item.quantity} /> <em className="text-muted">({item.item.stock} currently in stock)</em></p>
        </div>
      )
    });

    return (
      <div>
        <section className="row mb-4">
          <article className="col-xs-12 col-md-6">
            <h2>Cart Items</h2>
            <div className="card my-3">
              {items}
            </div>
          </article>
          <article className="col-xs-12 col-md-6">
            <h2>Cart Summary</h2>
          </article>
        </section>
        <Link className="btn btn-primary" to="/shop">Continue shopping</Link>
      </div>
    )
  }
}

export default ShoppingCart;