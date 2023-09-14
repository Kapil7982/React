import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [products, setProducts] = useState([]);
  const [activeComponent, setActiveComponent] = useState('productlist'); 
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);
  


  const handleLogin = async (formData) => {
    try {
      const response = await fetch('http://localhost:8888/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUserInfo(data.user);
      } else {
        console.error(data.message);
      }

       console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token'); 
    setUserInfo(null);
  };

  const handleRegister = async (formData) => {
    try {
      const response = await fetch('http://localhost:8888/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddProduct = async (productData) => {
    console.log(token);
    try {
      const response = await fetch('http://localhost:8888/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        setProducts([...products, data.product]);
      } else {
        console.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      
      <Navbar setActiveComponent={setActiveComponent}  userInfo={userInfo} handleLogout={handleLogout}/>
     <div className="container">
      
      {activeComponent === 'login' && <LoginForm handleLogin={handleLogin}/>}
      {activeComponent === 'register' && <RegisterForm handleRegister={handleRegister}/>}
      {activeComponent === 'productForm' && <ProductForm handleAddProduct={handleAddProduct}/>}
      {activeComponent === 'productList' && <ProductList token={token}/>}
      
      </div>
    </div>
  );
}

export default App;
