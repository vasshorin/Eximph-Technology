import React from 'react'

const Home = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <img src="https://via.placeholder.com/1200x400" alt="Pharma Machinery" className="img-fluid" />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12">
        <h2>Quick Products</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="/product1">
              <img src="https://via.placeholder.com/300x200" alt="Product 1" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="/product2">
              <img src="https://via.placeholder.com/300x200" alt="Product 2" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="/product3">
              <img src="https://via.placeholder.com/300x200" alt="Product 3" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper dolor. Maecenas vel blandit dolor, eu efficitur velit. Praesent bibendum enim id dui vehicula, at convallis est commodo. Nullam bibendum lectus a quam commodo, eget convallis sapien consequat. Pellentesque euismod bibendum mauris ut dapibus. Fusce euismod porta mauris, in lacinia metus tristique nec.</p>
      </div>
    </div>
      <footer className="bg-light mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <p>&copy; 2023 Pharma Machinery. All rights reserved.</p>
              <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
            </div>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default Home