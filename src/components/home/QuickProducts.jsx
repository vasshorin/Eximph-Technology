import React from 'react'
import { Link } from 'react-router-dom'


const QuickProducts = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium">Quick Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg shadow-lg">
              <Link to="/products/1">
                <img
                  src="https://quarco.ru/assets/images/resources/46/1.jpg"
                  alt="Product 1"
                  className="w-full rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Dry granulation</h3>
                {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                <Link
                  to="/products/1"
                  className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
              <Link to="/products/2">
                <img
                  src="https://quarco.ru/assets/images/resources/45/3.jpg"
                  alt="Product 2"
                  className="w-full rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Wet granulation</h3>
                {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                <Link
                  to="/products/2"
                  className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
              <Link to="/products/3">
                <img
                  src="https://quarco.ru/assets/images/resources/49/1.jpg"
                  alt="Product 3"
                  className="w-full rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Deduster</h3>
                {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
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