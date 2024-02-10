import React from 'react';
import './Fruits.css';


const Fruits = ({products,click}) => {
  return (
    <div className='box'>
      <h1>New Arrival</h1>
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
            <button className="add-to-cart-button" onClick=  {() => click(product)}>+ Add to Cart</button>
          </div>
        </li>
      ))}
      </ul>
    </div>

   
  );
};

export default Fruits;