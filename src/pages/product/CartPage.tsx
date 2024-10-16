import React from 'react';
import './CartPage.module.css';

const CartPage: React.FC = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <ul className="cart-list">
        <li className="cart-item">
          <span className="cart-item-name">Product 1(테스트)</span>
          <span className="cart-item-price">$100</span>
        </li>
        <li className="cart-item">
          <span className="cart-item-name">Product 2(테스트)</span>
          <span className="cart-item-price">$50</span>
        </li>
      </ul>
      <div className="cart-total">
        <span>Total:</span>
        <span>$150</span>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
