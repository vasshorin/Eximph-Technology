import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../assets/banner1.jpg'
import './Home.css'

const ControlledCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Advanced Machinery</h3>
          <p>We offer the latest and most advanced pharmaceutical equipment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Top-Quality Products</h3>
          <p>Our products are manufactured to the highest standards of quality and safety.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://quarco.ru/assets/images/resources/47/1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Global Reach</h3>
          <p>We serve customers all around the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
