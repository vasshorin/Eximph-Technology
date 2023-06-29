import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-wh.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl" onClick={scrollToTop}>
                <img src={logo} alt="logo" className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-auto">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-white-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={scrollToTop}
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-white-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={scrollToTop}
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className="text-white hover:bg-white-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={scrollToTop}
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-white-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>


      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={scrollToTop}
              aria-current="page"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white hover:bg-white-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={scrollToTop}
            >
              About
            </Link>

            <Link
              to="/products"
              className="text-white hover:bg-white-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={scrollToTop}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-white-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
