import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import useWindowSlice from './useWindowSlice';
// import starRating from './StarRating';
import StarRating from './StarRating'; // Adjust filename and path if necessary
import { useState } from 'react';
import ProgressBar from './ProgressBar';




function App() {
  const { width, height } = useWindowSlice();
  const[show, setShow] = useState(false);

  return (
    <>
      {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>

    //  <StarRating starCount = {10}/>
    // <div>
    //   <h1>Window Dimensions</h1>
    //   <p>Width: {width}px</p>
    //   <p>Height: {height}px</p>
    // </div>
  );
}

export default App;


