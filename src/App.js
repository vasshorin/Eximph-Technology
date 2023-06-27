import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import ProductDetails from './components/productDetails/ProductDetails';
import Contact from './components/contact/Contact';
import { products } from './components/items';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
