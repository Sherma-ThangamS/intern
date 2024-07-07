import "./purchase.scss"
import React from 'react';

const Purchase = () => {
  return (
    <div className="purchase">
      <div className="purchase-content">
        <h2>Unlock Skater Republic</h2>
        <p>Embark on your skateboarding journey now. Fill out the form below to purchase the game.</p>
        <form className="purchase-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />

          <label htmlFor="creditCard">Credit Card</label>
          <input type="text" id="creditCard" name="creditCard" placeholder="**** **** **** 1234" required />

          <label htmlFor="expirationDate">Expiration Date</label>
          <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required />

          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="123" required />

          <button type="submit">Purchase Now</button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;