import ProductCard from "./ProductCard";
import Effect from "./Effect/Effect";
import { useState } from "react";
function Products(){

    const products = [];
    //     {
    //     id: 1,
    //     title: "Apple iPhone 14",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 2,
    //     title: "Apple iPhone 13",
    //     price: "Rs. 70,000"
    //     },
    //     {
    //     id: 3,
    //     title: "Google Pixel 7",
    //     price: "Rs. 50,000"
    //     },
    //     {
    //     id: 4,
    //     title: "Nokia 1100",
    //     price: "Rs. 2,000"
    //     },
    //     {
    //     id: 5,
    //     title: "Samsung Galaxy S10",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 6,
    //     title: "Sony Xperia S10",
    //     price: "Rs. 1,00,000"
    //     }
    //     ];

    let [Products, setProducts] = useState([]);
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
        (response) => {
            return response.json()

        }
    ).then((res) => {
        console.log(res);
        setProducts(res);
    })

    return(
        <div>

            <div> <Effect /> </div>
             

            {
                products.map(function(item){
                    return (<ProductCard title={item.title}   prize={item.price}/>)

                })
            }
            
        </div>
    )


}

export let a = 10;
export let b = 20;

export default Products;

// can you design a rate limiter ?
// 