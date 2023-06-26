import React from 'react';
import eximphLogo from '../../assets/logo-bk.png';
import solidDosageLine from '../../assets/solid-dosage-line.jpg';
import packaging from '../../assets/doypak_lg.jpg';
import foodProcessingMachine from '../../assets/food-processing-machine.jpg';

function About() {
  console.log('Rendering About component...');

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-20">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/3 md:pr-8">
            <img src={eximphLogo} alt="Eximph Technologies" className="w-full h-auto" />
          </div>
        </div>
        <br />
        <div className="mt-8">
          <p className="text-lg leading-7 text-gray-500">
            Eximph Technologies is a global company that specializes in providing top-of-the-line pharmaceutical equipment to major producers in the industry. With years of experience and expertise, the company has established a strong reputation as a trusted partner for laboratories, production facilities, and manufacturers around the world.
          </p>
          <br />
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Solutions
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-500">
            At Eximph Technologies, we offer a range of solutions designed to meet the specific needs of each client, from laboratory-scale equipment to large-scale production lines. Our systems are engineered to provide the highest levels of accuracy, reliability, and efficiency, ensuring that each dose is delivered consistently and according to strict standards.
          </p>
        </div>
      </div>

      
      <div class="justify-center flex-1 w-full py-4 mx-auto lg:py-6 md:px-6 shadow-md">
  <div class="flex flex-wrap">
    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
      <img src={packaging} alt="" class="relative z-40 object-cover w-full h-96 rounded-3xl" />
    </div>
    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
      <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
        Advanced Packaging Solutions
      </h2>
      <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
        Our advanced packaging solutions are designed to meet the diverse needs of each client, spanning from laboratory-scale equipment to large-scale production lines. These systems are meticulously engineered to provide exceptional accuracy, reliability, and efficiency, ensuring consistent delivery of each dose in compliance with stringent standards.
      </p>
    </div>
  </div>
</div>

<div class="justify-center flex-1 w-full py-4 mx-auto lg:py-6 md:px-6 shadow-md">
  <div class="flex flex-wrap">
    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
      <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
        Customized Solid Dosage Production Lines
      </h2>
      <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
        Our customized solid dosage production lines are tailored to meet the unique requirements of each client, ranging from laboratory-scale equipment to large-scale production lines. These systems are meticulously engineered to ensure unparalleled accuracy, reliability, and efficiency, guaranteeing consistent delivery of each dose in accordance with the strictest standards.
      </p>
    </div>
    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
      <img src={solidDosageLine} alt="" class="relative z-40 object-cover w-full h-96 rounded-3xl" />
    </div>
  </div>
</div>

<div class="justify-center flex-1 w-full py-4 mx-auto lg:py-6 md:px-6 shadow-md">
  <div class="flex flex-wrap">
    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
      <img src={foodProcessingMachine} alt="" class="relative z-40 object-cover w-full h-96 rounded-3xl" />
    </div>
    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
      <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
        Cutting-Edge Food Processing Machines
      </h2>
      <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
        Our cutting-edge food processing machines are specifically designed to cater to the unique requirements of the food industry, incorporating features such as controlled environment manufacturing, specialized coatings, and precision dosing. These machines ensure optimal performance and quality in food processing operations.
      </p>
    </div>
  </div>
</div>

    </>
  );
}

export default About;