import React from 'react';
import ControlledCarousel from './ControlledCarousel';

const Home = () => {
  return (
    <div className="container mx-auto">
      <br/>
      
      <ControlledCarousel />
      <div className="mt-6">
        <h2 className="text-xl font-medium">Quick Products</h2>
        <div className="flex flex-wrap mt-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
            <a href="/products/1">
              <img src="https://quarco.ru/assets/images/resources/46/1.jpg" alt="Product 1" className="w-full rounded-lg" />
            </a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
            <a href="/products/2">
              <img src="https://quarco.ru/assets/images/resources/45/3.jpg" alt="Product 2" className="w-full rounded-lg" />
            </a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
            <a href="/products/3">
              <img src="https://quarco.ru/assets/images/resources/49/1.jpg" alt="Product 3" className="w-full rounded-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-medium">About Us</h2>
        <p className="mt-4">Eximph Technologies is a global company that specializes in providing top-of-the-line pharmaceutical equipment to major producers in the industry. With years of experience and expertise, the company has established a strong reputation as a trusted partner for laboratories, production facilities, and manufacturers around the world.</p>
        <a href="/about" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Read More</a>
      </div>
    </div>
  );
};

export default Home;
