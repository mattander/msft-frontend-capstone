import React from 'react';
import { Link } from 'react-router-dom';
import ShippingDetailsForm from './ShippingDetailsForm';

const ShoppingCart = (props) => {
  let cartTotal = 0;
  props.cart.forEach(item => {
    cartTotal = cartTotal + item.quantity;
  });
  if (cartTotal === 0) {
    return (
      <section className="container mt-3">
        <div className="row mb-4">
          <article className="col-xs-12 col-md-7 col-lg-8">
            <h2>Cart Items</h2>
            <p>There's nothing in your cart. Better get shopping!</p>
            <Link className="btn btn-primary" to="/shop">Continue shopping</Link>
          </article>
          <article className="col-xs-12 col-md-5 col-lg-4">
            <h2>Cart Summary</h2>
            <p>There's nothing in your cart.</p>
            <p className="border-bottom border-muted d-flex justify-content-between"><strong>Subtotal:</strong><span className="text-muted">$0</span></p>
            <p className="border-bottom border-muted d-flex justify-content-between"><strong>Shipping:</strong><span className="text-muted">$0</span></p>
            <p className="border-bottom border-muted d-flex justify-content-between"><strong>Tax:</strong><span className="text-muted">$0</span></p>
            <p className="lead d-flex justify-content-between"><strong>Total:</strong><strong>$0</strong></p>
            <hr />
            <p className="text-danger">Please add some items to your cart before you fill in your information and checkout.</p>
            {/* rubric50 = The user should see a checkout button */}
            <h4 className="mt-3">Enter your shipping details</h4>
            <ShippingDetailsForm disabled={true} total={0} />
          </article>
        </div>
      </section>
    )
  } else {
    const items = props.cart.map((item, index) => {
      return (
        <div className="card-body shopping-cart__item" key={item + index}>
          <div className="d-flex align-items-center mb-2">
            <h5 className="mb-0">{item.name}</h5>

            {/* rubric54 - cost updates when items are updated or removed (event call) */}
            <button onClick={(e) => {
              props.cartRemoveItem(item)
            }} className="ml-3 btn btn-outline-danger btn-sm">Remove from cart</button>
          </div>
          <p>${item.item.price.toFixed(2)}</p>
          <form className="form-inline">
            {/* rubric53 - cost updates when items are updated or removed (event call) */}
            <input className="form-control" onChange={(e) => {
              props.cartUpdateItem({
                name: item.name,
                quantity: parseInt(e.target.value)
              });
            }} id="itemQuantity" type="number" min="1" max={item.item.stock} defaultValue={item.quantity} /> <em className="ml-3 text-muted">({item.item.stock} currently in stock)</em>
          </form>
        </div>
      )
    });

    const subtotal = props.cart.length > 1 ? parseFloat(props.cart.reduce((total, item) => total.item.price + item.item.price * item.quantity)) : props.cart[0].item.price * props.cart[0].quantity;
    const shipping = parseFloat(subtotal * 0.05);
    const tax = parseFloat(subtotal * 1.13);
    const total = parseFloat(subtotal + shipping + tax);

    return (
      <section className="container mt-3">
        <div className="row mb-4">
          <article className="col-xs-12 col-md-6">
            <h2>Cart Items</h2>
            <div className="card my-3">
              {items}
            </div>
            <Link className="btn btn-primary" to="/shop">Continue shopping</Link>
          </article>

          <article className="col-xs-12 col-md-6">
            <h2>Cart Summary</h2>
            <p className="border-bottom border-muted d-flex justify-content-between"><strong>Subtotal:</strong><span className="text-muted">${subtotal.toFixed(2)}</span></p>
            <p className="border-bottom border-muted d-flex justify-content-between"><strong>Shipping:</strong><span className="text-muted">${shipping.toFixed(2)}</span></p>
            <p className="border-bottom border-muted d-flex justify-content-between"><strong>Tax:</strong><span className="text-muted">${tax.toFixed(2)}</span></p>
            <p className="lead d-flex justify-content-between"><strong>Total:</strong><strong>${total.toFixed(2)}</strong></p>
            <hr />
            {/* rubric50 = The user should see a checkout button */}
            <h4 className="mt-3">Enter your shipping details</h4>
            <ShippingDetailsForm disabled={false} total={total} />
          </article>
        </div>
      </section>
    )
  }
}

export default ShoppingCart;