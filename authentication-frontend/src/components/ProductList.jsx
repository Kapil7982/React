import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = ({token}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8888/products', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          console.error(data.message);
        }

        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, [token]);

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list"> 
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
