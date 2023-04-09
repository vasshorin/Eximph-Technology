import React from 'react';
import eximphLogo from '../../assets/logo-bk.png';
import solidDosageLine from '../../assets/solid-dosage-line.jpg';
import oncologyLine from '../../assets/oncology-line.jpg';
import foodProcessingMachine from '../../assets/food-processing-machine.jpg';

function About() {
  console.log('Rendering About component...');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mt-8">
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
        <h2 className="text-xl leading-7 font-semibold text-gray-900">
          Our Solutions
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-500">
          At Eximph Technologies, we offer a range of solutions designed to meet the specific needs of each client, from laboratory-scale equipment to large-scale production lines. Our systems are engineered to provide the highest levels of accuracy, reliability, and efficiency, ensuring that each dose is delivered consistently and according to strict standards.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/3 md:pr-8">
          <img src={solidDosageLine} alt="Solid Dosage Production Line" className="w-full h-auto" />
          <h3 className="text-lg leading-7 font-semibold text-gray-900 mt-4">Solid Dosage Production Lines</h3>
          <p className="mt-4 text-lg leading-7 text-gray-500">
            Our solid dosage production lines are designed to meet the specific needs of each client, from laboratory-scale equipment to large-scale production lines. These systems are engineered to provide the highest levels of accuracy, reliability, and efficiency, ensuring that each dose is delivered consistently and according to strict standards.
          </p>
        </div>
        <div className="md:w-1/3 md:pr-8 mt-8 md:mt-0">
          <img src={oncologyLine} alt="Oncology Production Line" className="w-full h-auto" />
          <h3 className="text-lg leading-7 font-semibold text-gray-900 mt-4">Oncology Production Lines</h3>
          <p className="mt-4 text-lg leading-7 text-gray-500">
            Our oncology production lines are designed to meet the unique needs of the pharmaceutical industry, with features such as controlled environment manufacturing, specialized coatings, and precision dosing.
          </p>
        </div>
        <div className="md:w-1/3 md:pr-8 mt-8 md:mt-0">
          <img src={foodProcessingMachine} alt="Food Processing Machine" className="w-full h-auto" />
          <h3 className="text-lg leading-7 font-semibold text-gray-900 mt-4">Food Processing Machines</h3>
          <p className="mt-4 text-lg leading-7 text-gray-500">
            Our food processing machines are designed to meet the unique needs of the food industry, with features such as controlled environment manufacturing, specialized coatings, and precision dosing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;