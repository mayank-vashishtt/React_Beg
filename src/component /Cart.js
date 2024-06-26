// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions/cartActions';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity(id, quantity));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
              min="1"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
