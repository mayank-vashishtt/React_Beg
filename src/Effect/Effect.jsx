import { useState, useEffect   } from "react";
function Effect(){

    const [count, setCount] = useState(0);
    const [count1, setCount1 ] = useState(0);
    console.log("rerendered");

    // mounting -- when a component is called for the first time

    useEffect(function(){
        console.log("rendering ");
        // will be called everytime

    }); 

    useEffect(function(){
        console.log("count changed");

    },[count]); 

    useEffect(function(){
        console.log("count 1 changed");

    },[count1]); 
    return(
        <div>
            <button onClick={() => {setCount(count + 1 )}}>Add</button>
            <p> {count}</p>
            <button onClick={() => {setCount1(count1 + 1 )}}>Add1 </button>
            <p>{count1}</p>
        </div>
    )



}

export default Effect;