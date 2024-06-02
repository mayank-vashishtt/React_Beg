import './ProductCart.css';
import {useRef} from 'react';

function ProductCard({title,prize}){

    let pRef = useRef(0);

    function printTitle(){
        console.log("printtile");
        console.log(pRef.current.innerText);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block";

        }
        else{
            pRef.current.style.display ="none";

        }
    }

    // console.log(title);

    return(
        <div className="product-card">
            <p onClick={printTitle}>{title} </p>
           <p ref = {pRef }> {prize}</p>
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
// useState
// useRef
// useEffect 

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of the function 
// they should not be in any condition 

// create- react - app






// what is closure --  retain the scope of variable even after the function is returned 
