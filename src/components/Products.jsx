import React from "react";

function Products({name, price}) {
    return (
        <div>
            <h3>Our Products</h3>
           <p>Product Name: {name}</p>
           <p>Producty Price: {price}</p>
           <button>Add To Cart</button>
           <button>Remove from Cart</button>
           <button>Buy Now</button>
        </div>
    );
}

export default Products;
// The Products component displays product information and actions like adding to cart, removing from cart, and buying now.