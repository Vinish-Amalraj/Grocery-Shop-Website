import React from 'react';
import "./Cart.css";


const Cart = ({ cart, warning, remove }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className='bo'>
        {cart.length === 0 && <h2>Cart is empty</h2>}
        {warning && <p></p>}
        {cart.map((item) => (
          <div className='List' key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Original Price: <s>Rs{item.originalPrice}</s></p>
            <p>Discounted Price:<b>Rs{item.discountedPrice}</b></p>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
          
        ))}
      </div>
      <div className='buy'>
      {cart.length !== 0 && <button>Buy</button>}
      </div>
    </div>
  );
};

export default Cart;
