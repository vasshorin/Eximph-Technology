import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './items.js';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <h2>Product not found</h2>;
  }
  
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductDetails;
