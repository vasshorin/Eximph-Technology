import React from 'react';
import eximphLogo from '../assets/eximph-logo.png';
import solidDosageLine from '../assets/solid-dosage-line.jpg';
import oncologyLine from '../assets/oncology-line.jpg';
import foodProcessingMachine from '../assets/food-processing-machine.jpg';



function About() {
    console.log('Rendering About component...');
  
    return (
      <div>
        <h1>About Us</h1>
        <div className="row">
          <div className="col-md-4">
            <img src={eximphLogo} alt="Eximph Technologies" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <p>Eximph Technologies is a global company that specializes in providing top-of-the-line pharmaceutical equipment to major producers in the industry. With years of experience and expertise, the company has established a strong reputation as a trusted partner for laboratories, production facilities, and manufacturers around the world.</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h2>Our Solutions</h2>
            <p>At Eximph Technologies, we offer a range of solutions designed to meet the specific needs of each client, from laboratory-scale equipment to large-scale production lines. Our systems are engineered to provide the highest levels of accuracy, reliability, and efficiency, ensuring that each dose is delivered consistently and according to strict standards.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={solidDosageLine} alt="Solid Dosage Production Line" className="img-fluid" />
            <h3>Solid Dosage Production Lines</h3>
            <p>Our solid dosage production lines are designed to meet the specific needs of each client, from laboratory-scale equipment to large-scale production lines. These systems are engineered to provide the highest levels of accuracy, reliability, and efficiency, ensuring that each dose is delivered consistently and according to strict standards.</p>
          </div>
          <div className="col-md-4">
            <img src={oncologyLine} alt="Oncology Production Line" className="img-fluid" />
            <h3>Oncology Production Lines</h3>
            <p>Our oncology production lines are designed to meet the unique needs of the pharmaceutical industry, with features such as controlled environment manufacturing, specialized coatings, and precision dosing.</p>
          </div>
          <div className="col-md-4">
            <img src={foodProcessingMachine} alt="Food Processing and Packaging Machine" className="img-fluid" height="100px" />
            <h3>Food Processing and Packaging Machines</h3>
            <p>Our food processing and packaging machines are designed to meet the demanding requirements of the food industry, with features such as sanitary design, easy-to-clean surfaces, and precision cutting and portioning capabilities.</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h2>Auxiliary Equipment</h2>
            <p>To support our production lines and equipment, we also offer a range of auxiliary equipment, such as bins, blenders, lifters, capsule polishers, metal detectors, dust collectors, vacuum loaders, and tablet tools. These tools are designed to work seamlessly with our production lines and equipment, ensuring that each client has everything they need to optimize their processes and achieve the highest levels of quality and efficiency.</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h2>Our Services</h2>
            <p>At Eximph Technologies, we offer a range of services designed to help our clients achieve the highest levels of quality and efficiency. Our services include:</p>
            <ul>
              <li>Engineering and design</li>
              <li>Installation and commissioning</li>
              <li>Training</li>
              <li>After-sales support</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

export default About;
