import React, { useState } from 'react';
import './Cart.css'
import Choosen from './Choosen/Choosen';
import Random from './Random/Random';

const Cart = ({ items , empty}) => {

  const [randomOne, setRandomOne] = useState({});


  const chooseRandom = () => {
    let randomIndex = Math.floor(Math.random() * items.length);
    setRandomOne(items[randomIndex]);
  }


  const ClearCart = () => {
     setRandomOne({});
     empty([]);
  }

  
  return (
    <div>
      <div className="cart-body">
        <h2 className='heading-of-cart'>Shopping Cart</h2>
        <div className="selected-item">
          <h4>Selected Items</h4>
          <div id='chose' className="chosen">
            {items.map(item => <Choosen key={item.id} data={item}></Choosen>)}
            <Random randomData={randomOne}></Random>
          </div>
          <button onClick={chooseRandom} className='btn-success'>Choose One Random</button> <br />
          <button onClick={ClearCart} className='btn-danger'>Clear Cart</button>

        </div>
      </div>
    </div>
  );
};

export default Cart;