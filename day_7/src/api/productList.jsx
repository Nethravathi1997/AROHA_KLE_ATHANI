// src/ProductList.js
import React, { useState, useEffect } from "react";
import './products.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  
  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;