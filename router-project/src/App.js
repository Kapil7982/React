import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductCategory from './components/ProductCategory';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Banner />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<ProductCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
