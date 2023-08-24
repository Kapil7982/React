import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; // Import the Products.css styles

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8888/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      <div className="product-grid">
        {products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`} className="product-link">
          <div className="product-item">
            <img src={product.images} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-category">{product.category}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
