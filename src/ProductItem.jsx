// Represents a single product, recieving individual product data (via props) from ProductList

import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
        <div className='card'>
            <div className="product-item ">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price" >${product.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <p className="product-description">{product.description}</p>
            <img src={product.image} alt={product.name} className="product-image" />
            </div>
        </div>
  );
}

export default ProductItem;

// Recieves individual product data from ProductList component via props
// Displays product name, price, and description
// uses CSS classes for styling
// Applies custom CSS styling to each product item
