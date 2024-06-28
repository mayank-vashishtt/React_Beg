// components/Cart.js
import React, { useContext } from 'react';
import CartContext from '../Context/Context';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {Object.keys(cart).length > 0 ? (
        Object.values(cart).map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
