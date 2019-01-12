import React from 'react';
import CartList from '../components/CartList';
import CartSummary from '../components/CartSummary';

const ShoppingCart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <section className="row">
        <div className="col">
          <CartList />
        </div>
        <div className="col">
          <CartSummary />
        </div>
      </section>
      <p>Continue Shopping</p>
    </div>
  );
}

export default ShoppingCart;