// Manages the State that holds an array of products
// Passes the list of products as a prop to ProductList component
// Styles the main structure of the app using CSS

import { useState } from 'react'
import ProductList from './ProductList'
import './App.css'


function App() {
  // Initialize state using UseState hook to store a list of products (each product with the attributes: id, name, price, description)
  const [products, setProducts] = useState([
    { id: 1, name: 'Griffin Bed', price: 1999, category: 'Bedroom', description: 'This is a bed', image: '/assets/product-image-bedroom.avif' },
    { id: 2, name: 'Soto Chair', price: 827, category: 'Living Room', description: 'A midcentury modern chair perfect for your living room', image: '/assets/product-image-chair.avif' },
    { id: 3, name: 'Bryant Daybed', price: 2329, category: 'Living Room', description: 'A cozy daybed for midafernoon naps', image: '/assets/product-image-daybed.avif' },
    { id: 4, name: 'Adele Side Table', price: 1070, category: 'Dining Room', description: 'The perfect midcentury modern touch for your dining room', image: '/assets/product-image-dresser.avif' },
    { id: 5, name: 'Bryant Sofa', price: 3265, category: 'Living Room', description: 'A plush green sofa', image: '/assets/product-image-sofa.avif' },
    { id: 6, name: 'Lotta Bed', price: 2627, category: 'Bedroom', description: 'A whole lotta bed!', image: '/assets/product-image-bedroom2.avif' },
  ])

  const categories = [
    { id: 1, name: 'Bedroom' },
    { id: 2, name: 'Living Room' },
    { id: 3, name: 'Dining Room' },
  ]

  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products


  return (
    <>
      <div>
        <h1 className="app-title">My E-Commerce Product Listing App</h1>
        <div className="category-filter">
          <h2>Filter by Category</h2>
          <select className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>

        </div>
        <ProductList products={filteredProducts} />

      </div>

    </>
  )
}

export default App
