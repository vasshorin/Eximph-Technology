import React from "react";
import { Link } from "react-router-dom";
import { Features } from "../features/Features";
import h1 from "../../assets/images/h1.jpg";
import h2 from "../../assets/images/h2.jpg";
import Partners from "./Partners";
import QuickProducts from "./QuickProducts";

const Home = () => {
  return (
    <>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/4021781/pexels-photo-4021781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">

          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>

              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Welcome to
                <br className="hidden md:block" />
                Eximph {' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Technology
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                We are a leading provider of pharmaceutical equipment and installation services, with a strong track record of delivering high-quality solutions to our clients.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white hover:text-blue-300 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gray-800 focus:shadow-outline focus:outline-none "
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="container mx-auto">
        <Features />
        <Partners />
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Empowering Pharmaceutical Excellence</h2>
              <p className="mb-4">Eximph Technology stands as a global powerhouse, empowering major players in the pharmaceutical industry with cutting-edge equipment solutions. Our unwavering commitment to excellence has solidified our position as the preferred partner for laboratories, production facilities, and manufacturers worldwide.</p>
              <p>We take pride in our comprehensive range of solutions tailored to the unique requirements of each client, spanning from precision laboratory-scale equipment to high-capacity production lines. Meticulously engineered for unrivaled precision, unwavering reliability, and optimum efficiency, our systems guarantee consistent dose delivery in strict adherence to the most stringent industry standards.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img className="w-full rounded-lg" src={h1} alt="Pexels office" />
              <img className="w-full lg:mt-20 rounded-lg" src={h2} alt="Pexels factory" />
            </div>
          </div>
        </section>
        <QuickProducts />
        <br />
        <br />

      </div>
    </>
  );
};

export default Home;
