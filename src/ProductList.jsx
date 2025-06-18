// Recieves list of products from App via props and maps through them to display each product

import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

// recieve product list from App component via props
function ProductList({ products }) {
  return (
    <div className="product-list">
        <div className= 'product-cards'>
        {products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
        </div>
    </div>
  );
}

export default ProductList;

// Create ProductList component that takes the product list as a prop and maps through it
// Use .map() to iterate over the products array and render a ProductItem for each product
// Custom CSS styling for the product list container
