import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import './Home.css'

const Home = () => {
  return (
    <div className="container-fluid">
      <ControlledCarousel />
      <div className="row mt-3">
        <div className="col-12">
          <h2>Quick Products</h2>
          <div className="row">
            <div className="col-md-4">
              <a href="/products/1">
                <img src="https://quarco.ru/assets/images/resources/46/1.jpg" alt="Product 1" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="/products/2">
                <img src="https://quarco.ru/assets/images/resources/45/3.jpg" alt="Product 2" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="/products/3">
                <img src="https://quarco.ru/assets/images/resources/49/1.jpg" alt="Product 3" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <h2>About Us</h2>
          <p className="about-text">Eximph Technologies is a global company that specializes in providing top-of-the-line pharmaceutical equipment to major producers in the industry. With years of experience and expertise, the company has established a strong reputation as a trusted partner for laboratories, production facilities, and manufacturers around the world.</p>
          <a href="/about" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Home
