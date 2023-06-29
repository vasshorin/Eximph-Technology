import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../items.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const advantagesList = product.advantages.split("\n").map((advantage) => {
    if (advantage) {
      return (
        <li key={advantage} className="text-gray-700">
          {advantage.trim()}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleQuoteRequest = () => {
    const subject = encodeURIComponent(`Quote Request - ${product.name}`);
    const mailtoLink = `mailto:info@eximph.com?subject=${subject}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="container mx-auto py-10 px-4 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {product.images.length > 1 ? (
            <Carousel showArrows infiniteLoop>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    className="product-image"
                    src={image.imageUrl}
                    alt={product.name}
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <img
              className="product-image"
              src={product.images[0].imageUrl}
              alt={product.name}
            />
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Advantages
            </h2>
            <ul className="list-disc pl-5">{advantagesList}</ul>
            <br />
            {product.specs.length > 0 ? (
              <table className="py-4">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-200" : ""}
                    >
                      <th className="text-gray-700 font-bold">{spec.label}</th>
                      {spec.values.map((value, index) => (
                        <td
                          key={index}
                          className="p-2 border border-gray-400 text-center"
                          colSpan={value.colspan || 1}
                        >
                          {value.text}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
            
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
              onClick={handleQuoteRequest}
            >
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
