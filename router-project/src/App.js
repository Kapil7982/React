import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductCategory from './components/ProductCategory';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) =>{

    setCartItems([...cartItems, product]);
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div className="app">
      <Navbar cartItems={cartItems} />
        <Cart cartItems={cartItems}/>
        <Banner />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<ProductCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/products/:productId' element={<ProductDetail addToCart={addToCart} products={products}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
