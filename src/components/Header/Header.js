import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="title">Baba Pet Shop</div>
      <div className="nav">
        <nav>
          <span>Home</span>
          <span>Category</span>
          <span>Support</span>
        </nav>
      </div>
    </div>
  );
};

export default Header;