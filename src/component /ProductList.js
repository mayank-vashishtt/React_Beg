// components/ProductList.js
import React, { useContext } from 'react';
import CartContext from '../Context/Context';

const ProductList = ({ products, selectedCategory }) => {
  const { addToCart } = useContext(CartContext);
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
