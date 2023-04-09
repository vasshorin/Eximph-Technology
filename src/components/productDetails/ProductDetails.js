import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../items.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const advantagesList = product.advantages
    .split("\n")
    .map((advantage) => {
      if (advantage) {
        return (
          <li key={advantage} className="text-gray-700">
            {advantage.trim()}
          </li>
        );
      }
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <img className='product-image' src={product.imageUrl} alt={product.name} />
          {/* <Carousel showThumbs={false}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={product.name} className="product-image" />
              </div>
            ))}
          </Carousel> */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Advantages</h2>
            <ul className="list-disc pl-5">{advantagesList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
