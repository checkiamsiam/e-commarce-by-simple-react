import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({pro , click}) => {
  const { name, img, price } = pro;
  return (
    <div className='card-container'>
      <div className="image">
        <img className='zoom-img' src={img} alt="" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <h5>price: <span className='tk'>&#2547;</span> {price}</h5>
      </div>
      <div onClick={click} className="add-btn">
        Add To Cart    <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default Product;