import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fake-data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  let chosenItem = [];
  const hadleEvent = (item) => {
    if (chosenItem.indexOf(item) !== -1) {
      return;
    } else {
      chosenItem.push(item)
    }
    console.log('click item', chosenItem);
  }
  return (
    <div className='shop-container'>
      <div className="product">
        {products.map(product => <Product key={product.id} pro={product} click={() => hadleEvent(product)}></Product>)}
      </div>
      <div className="cart">
        <Cart items={chosenItem}></Cart>
      </div>
    </div>
  );
};

export default Shop;