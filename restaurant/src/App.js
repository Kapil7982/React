
import './App.css';
import React, { useEffect, useState } from 'react';

import RestaurantDetails from './components/RestaurantDetails';



function App() {


  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);


  return (
    <div className="App">
     <RestaurantDetails data={restaurants} setRestaurants={setRestaurants} />
    </div>
  );
}

export default App;
