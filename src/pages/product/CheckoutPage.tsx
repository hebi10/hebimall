import React from 'react';
import './CheckoutPage.module.css';

const CheckoutPage: React.FC = () => {
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method</label>
          <select id="payment" className="form-control">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="checkout-btn">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
