import React from 'react';
import {products} from '../items.js';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="col-md-4 col-sm-6 my-6 transform hover:scale-105 transition duration-500">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <div className="card rounded-3">
          <img src={product.images[0].image} className="card-img-top rounded-top-3" alt={product.name} />
          <div className="card-body">
            <h1 className="text-xl">{product.name}</h1>
            <button className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700">View Product</button>
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
