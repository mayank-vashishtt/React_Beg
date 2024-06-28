// App.js
import './App.css';
import { useState } from 'react';
import ProductList from './component /ProductList';
import Cart from './component /Cart';
import CartContext from './Context/Context';

const products = [
  { id: 1, name: 'Product 1', price: 100, category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 200, category: 'Furniture' },
  { id: 3, name: 'Product 3', price: 150, category: 'Electronics' },
  { id: 4, name: 'Product 4', price: 300, category: 'Furniture' },
];

function App() {
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: prevCart[product.id]
        ? { ...prevCart[product.id], qty: prevCart[product.id].qty + 1 }
        : { ...product, qty: 1 }
    }));
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id].qty > 1) {
        newCart[product.id].qty -= 1;
      } else {
        delete newCart[product.id];
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div>
        <div>
          <button onClick={() => setSelectedCategory('All')}>All</button>
          <button onClick={() => setSelectedCategory('Electronics')}>Electronics</button>
          <button onClick={() => setSelectedCategory('Furniture')}>Furniture</button>
        </div>
        <ProductList products={products} selectedCategory={selectedCategory} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
