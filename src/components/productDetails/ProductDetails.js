import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../items.js";
import "./ProductDetails.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  const advantagesList = product.advantages.split("\n").map((advantage) => {
    if (advantage) {
      return <li>{advantage.trim()}</li>;
    }
  });

  return (
    <div className="product-details">
      <div className="product-image">
        <img className='product-image' src={product.imageUrl} alt={product.name} />
      </div>
      <div className="">
        <h2 className="product-title">{product.name}</h2>
        <p className="products-">{product.description}</p>
        <h2 className="product-title">Advantages</h2>
        {/* <p className="advantages">{product.advantages}</p> */}
        <ul>{advantagesList}</ul>
      </div>
    </div>
  );
};

export default ProductDetails;
