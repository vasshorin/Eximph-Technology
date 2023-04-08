import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../items.js';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <h2>Product not found</h2>;
  }
  
  return (
    <div className='product-details'>
      <div>
      <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className=''>
      {/* <h1 className='product-title'>Product Details</h1> */}
      <h2 className='product-name'>{product.name}</h2>
      <p className='products-'>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
