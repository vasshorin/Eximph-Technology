import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner1.jpg';

const ControlledCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-full carousel-img"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-xl font-medium">Advanced Machinery</h3>
          <p className="mt-2">We offer the latest and most advanced pharmaceutical equipment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full carousel-img"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-xl font-medium">Top-Quality Products</h3>
          <p className="mt-2">Our products are manufactured to the highest standards of quality and safety.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full carousel-img"
          src="https://quarco.ru/assets/images/resources/47/1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-xl font-medium">Global Reach</h3>
          <p className="mt-2">We have a global network of partners and distributors to serve you better.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;