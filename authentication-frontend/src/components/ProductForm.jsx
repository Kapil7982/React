import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ handleAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(''); 
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct({ name, price, image, description });

    setName('');
    setPrice('');
    setImage('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input"
      />
      <input
  type="text"
  placeholder="Image URL"
  value={image}
  onChange={(e) => setImage(e.target.value)}
  className="input"
/>
<textarea
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="input"
/>
      <button type="submit" className='button'>Add Product</button>
    </form>
  );
};

export default ProductForm;
