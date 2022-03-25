import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const { name, img, price } = props.Pro;
  return (
    <div className='card-container'>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <h5>price: ${price}</h5>
      </div>
      <div className="add-btn">
        Add To Cart    <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default Product;