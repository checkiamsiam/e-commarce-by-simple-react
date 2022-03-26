import React from 'react';
import './Random.css'

const Random = ({randomData}) => {
  return (
    <div>
      <h3>Best From All</h3>
      <img className='random-one-img' src={randomData.img} alt="" />
      <b className='random-one-name' >{randomData.name}</b> <br />
      <b>Price: BDT.{randomData.price}</b>
    </div>
  );
};

export default Random;