import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mx-auto pt-10 sm:mt-10 pt-10">
      <div className="container mx-auto px-6 py-10 lg:flex lg:justify-between">
        <div className="lg:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Navigation</h3>
          <ul className="list-reset">
            <li className="my-2">
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li className="my-2">
              <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            </li>
            <li className="my-2">
              <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-2">Get the latest news and updates.</p>
          <form className="flex flex-col sm:flex-row">
            <input type="text" placeholder="Email" className="bg-gray-900 text-gray-100 rounded mb-2 sm:mb-0 sm:mr-2 px-2 py-1" />
            <button className="bg-blue-600 hover:bg-blue-700 rounded px-2 py-1">Subscribe</button>
          </form>
        </div>

        <div className="lg:w-1/3 lg:mx-6 mt-6 lg:mt-0">
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">Phone: +852-6823-8805</p>
          <p className="text-gray-400 mb-2">Email: info@eximph.com</p>
          <p className="text-gray-400 mb-2">Suite 803, Level 8, Chit Lee Commercial Building, No. 30-36 Shau Kei Wan Road, Sai Wan Ho, Hong Kong.</p>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Eximph Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
  
};  

export default Footer;