import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-light mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              </ul>
          </div>
          <div className="col-md-6 text-center">
            {/* TODO: CHANGE PHONE NUBMBER */}
            <p>Phone: +852 1234 5678</p>
            <p>Email: vasily@eximph.com</p>
            <p>Suite 803, Level 8, Chit Lee Commercial Building, No. 30-36 Shau Kei Wan Road, Sai Wan Ho, Hong Kong.</p>
          </div>
          <div className="col-md-3 text-end">
            <p>&copy; 2023 Eximph Technologies. All rights reserved.</p>
            <p><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
