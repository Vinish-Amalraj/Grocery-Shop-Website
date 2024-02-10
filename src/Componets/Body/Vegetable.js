import React from 'react';
import './Vegetable.css';

const Vegetable = ({products ,click}) => {

  return (
    <div className='box'>
      <h1>Fresh Vegetables</h1>
      <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-prices">
              <span className="original-price">Rs{product.originalPrice}</span>
              <span className="discounted-price">Rs{product.discountedPrice}</span>
            </p>
            <button  className="add-to-cart-button" type='submit' onClick={() => click(product)}>+ Add to Cart</button>
          </div>
        </li>
      ))}
      </ul>
    </div>

   
  );
};

export default Vegetable;