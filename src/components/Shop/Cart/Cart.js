import React from 'react';
import './Cart.css'

const Cart = () => {
  return (
    <div>
      <div className="cart-body">
      <h2 className='heading-of-cart'>Shopping Cart</h2>
      <div className="selected-item">
        <h4>Selected Items</h4>
        
        <button className='btn-success'>Choose One Random</button> <br />
        <button className='btn-danger'>Clear Cart</button>
        
      </div>
      </div>
    </div>
  );
};

export default Cart;