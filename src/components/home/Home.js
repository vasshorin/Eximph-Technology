import React from 'react';
import ControlledCarousel from './ControlledCarousel';
import jumbo from '../../assets/pexels-anna-shvets-3683056.jpg'

const Home = () => {
  return (
    <div className="container mx-auto">

<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
          <div className="relative bg-blue-100 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={jumbo} alt="Background" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative px-4 py-32 mx-auto max-w-screen-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to Eximph Technologies</span>
            <span className="block text-blue-200">Your trusted partner for top-of-the-line pharmaceutical equipment</span>
          </h1>
        </div>
      </div>
      <br />

      <div class="grid md:grid-cols-2 gap-8">
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Why choose us?</h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">We are a leading provider of pharmaceutical equipment and installation services, with a strong track record of delivering high-quality solutions to our clients.</p>
        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
            <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Our expertise in pharmaceutical equipment</h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Our team of experts has extensive experience in providing pharmaceutical equipment solutions that meet the needs of our clients. We only use the best technologies and equipment to ensure top-quality installations.</p>
        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
            <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    </div>
</div>

    </div>
</section>
      <div className="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-medium">Quick Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg shadow-lg">
            <a href="/products/1">
              <img src="https://quarco.ru/assets/images/resources/46/1.jpg" alt="Product 1" className="w-full rounded-t-lg" />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Dry granulation</h3>
              {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
              <a href="/products/1" className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700">Learn More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <a href="/products/2">
              <img src="https://quarco.ru/assets/images/resources/45/3.jpg" alt="Product 2" className="w-full rounded-t-lg" />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Wet granulation</h3>
              {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
              <a href="/products/2" className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700">Learn More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <a href="/products/3">
              <img src="https://quarco.ru/assets/images/resources/49/1.jpg" alt="Product 3" className="w-full rounded-t-lg" />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Deduster</h3>
              {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
              <a href="/products/3" className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

};

export default Home;