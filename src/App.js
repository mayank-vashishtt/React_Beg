import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import useWindowSlice from './useWindowSlice';
// import starRating from './StarRating';
import StarRating from './StarRating'; // Adjust filename and path if necessary
import { useState } from 'react';
import ProgressBar from './ProgressBar';
// import Cart from './component/Cart';
import ProductList from './component /ProductList';
import Cart from './component /Cart';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

function App() {
  const { width, height } = useWindowSlice();
  const[show, setShow] = useState(false);

  return (
    <div>
    <ProductList products={products} />
    {/* <Cart /> */}
    <Cart />
  </div>

    // <TicTacToe size={4} />
    // <>
    //   {show ? <ProgressBar /> : ""}
    //   <button onClick={() => setShow(!show)}>Toggle</button>
    // </>

    //  <StarRating starCount = {10}/>
    // <div>
    //   <h1>Window Dimensions</h1>
    //   <p>Width: {width}px</p>
    //   <p>Height: {height}px</p>
    // </div>
  );
}

export default App;


// Redux  - state management for storing data
// global parent 
// global state 
// way to manipulate a state 
// way to consume a state

// provider
// store
  // state
  // reducer
// action 
// dispatcher 
// selectors

/*
usecontext -- prop dealing is avoided but rerender do not stop 

Q) diff between context api and redux in term of rerendering 
Ans) redux subsribe to the particular key while context say to subsricbe to whole state 

4 thing you want redux or state management to do
-- have a global state to manage 
-- that state can be used 
-- way to consume that state 
-- way to manipulate the state




*/