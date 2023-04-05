import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './components/Home';
import About from './components/About';
// import Products from './components/Products';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;