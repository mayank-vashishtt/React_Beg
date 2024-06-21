import './ProductCart.css';
import AddToCart from './AddToCart';
import {useRef, useState} from 'react';

function ProductCard({title,prize}){

    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    let [inputV , setInputV] = useState('Class'); 

    function printTitle(){
        // console.log("printtile");
        // console.log(pRef.curr ent.innerText);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block";

        }
        else{
            pRef.current.style.display ="none";

        }
    }


    // console.log("rerender", inputV );
    function displayOutput(e){ 
        // console.log(iRef.current);
        // console.log(oRef.current);
        // oRef.current.innerText = oRef.current.innerText + iRef.current.value; // whatever we are adding here is getting added, even being there after dlt  
        // oRef.current.innerText = `Output here: ${iRef.current.value }`;
        setInputV(e.target.value);
    }

    // console.log(title);
    // <img src = {name}/> do this after importing the image
    // compoenet folder  to make it ease

    return(
        <div className="product-card">
            <p onClick={printTitle}>{title} </p>
           <p ref = {pRef }> {prize}</p>
           <input type = "text"  onChange={displayOutput } ref= {iRef } value={inputV}/>  
           {/* controlled component -- when we control value of input and output together , [inputV] is above */}
        
           <p ref = {oRef}>over here output would arrive - {inputV} </p>
           <AddToCart  inputV={inputV  }  /> 
        </div>
    )
}

export default ProductCard;

// javascript xml  notification -- html written in js 
// there are 2 types of exports 
// one is default and one is named
// one default export you can have in file
// and multiple named export 
 
// destructuring in js 

// mapping in js 
// let a = [10,20,30,40];
// a.map(item => item*2);'

// hooks are the helper function in js 
// useState  cause rerender 
// useRef -- search it on google  To access a DOM element or persist values across renders without causing re-renders.


// useEffect 
// / empty dependency arr == only once on mounting 
// no dependecy arr == everytime  -- mouting and rerendering 
// with state variable == mounting + on change of the state variable

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of the function 
// they should not be in any condition 

// create- react - app






// what is closure --  retain the scope of variable even after the function is returned 

// state variable  -- whenever a state variable is set, it will cause a rerender  of the component 
// and the value of the variable will be retained on the rerender 

// Mounting -- function or componenet is called for the first time  

// useState(default value)
// returns [stateVar, setterFn]
// here only productcard will rerender, not product 

// it will cause the rerender of AddToCart

// useEffect(fn,[])
// function called for the mounted phse then the array one will be called , only state variables in array

/*  

useState -- state management
when a state variable is set -- it rerenders the whole function null component, to maintain consitency between UI and data



Frontend Low-Level Design (LLD) refers to the detailed and granular blueprint of the frontend architecture and
 implementation for a web or mobile application. It focuses on the specific technical details and decisions that 
 guide the actual coding and structuring of the frontend components. Here's what frontend LLD typically involves:

 semantic manner use correct tag 


 fontawesome
 svg -- google , it is a way to create image in html , it is faster
 
 how can you make images efficient -- use icons, use prides, use smaller images, if images use webp images, image to be served in zip manner

 after and before element -- pseudo element in css -- 
  

*/