import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 mt-10 bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="lg:flex">
          <div className="w-full lg:w-1/3">
            <h3 className="text-white font-bold mb-2">Navigation</h3>
            <ul className="list-reset">
              <li className="my-2">
                <Link to="/" className="text-white hover:text-gray-600">Home</Link>
              </li>
              <li className="my-2">
                <Link to="/about" className="text-white hover:text-gray-600">About</Link>
              </li>
              <li className="my-2">
                <Link to="/products" className="text-white hover:text-gray-600">Products</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 lg:mx-6 mt-6 lg:mt-0">
            <h3 className="text-white font-bold mb-2">Contact Us</h3>
            <p className="text-white mb-2">Phone: +852 1234 5678</p>
            <p className="text-white mb-2">Email: vasily@eximph.com</p>
            <p className="text-white mb-2">Suite 803, Level 8, Chit Lee Commercial Building, No. 30-36 Shau Kei Wan Road, Sai Wan Ho, Hong Kong.</p>
          </div>
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <p className="text-white mb-2">&copy; 2023 Eximph Technologies. All rights reserved.</p>
            <p>
              <Link to="/privacy-policy" className="text-white hover:text-gray-600">Privacy Policy</Link> |
              <Link to="/terms-of-service" className="text-white hover:text-gray-600"> Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;