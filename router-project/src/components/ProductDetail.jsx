import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import './ProductDetails.css'

const ProductDetail = ({addToCart}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8888/products/${productId}`) 
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, [productId]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="product-detail-container">
      <img src={product.images} alt={product.name} className="product-detail-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
