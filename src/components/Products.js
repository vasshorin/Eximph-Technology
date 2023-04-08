import React from 'react';
import {products} from './items.js';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <div className="card rounded-3">
          <img src={product.imageUrl} className="card-img-top rounded-top-3" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Products = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
