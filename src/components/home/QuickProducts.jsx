import React from 'react';
import dry from '../../assets/products/1.jpg';
import wet from '../../assets/products/2.jpg';
import deduster from '../../assets/products/3.jpg';
import { Link } from 'react-router-dom'


const QuickProducts = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium">Quick Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg shadow-lg trasition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link to="/products/1">
                <img
                  src={dry}
                  alt="Product 1"
                  className="w-full rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Dry granulation</h3>
                <Link
                  to="/products/1"
                  className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg trasition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link to="/products/2">
                <img
                  src={wet}
                  alt="Product 2"
                  className="w-full rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Wet granulation</h3>
                <Link
                  to="/products/2"
                  className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg trasition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link to="/products/3">
                <img
                  src={deduster}
                  alt="Product 3"
                  className="w-full rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Deduster</h3>
                <Link
                  to="/products/3"
                  className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default QuickProducts