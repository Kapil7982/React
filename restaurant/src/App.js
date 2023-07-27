
import './App.css';
import React, { useEffect, useState } from 'react';

import RestaurantDetails from './components/RestaurantDetails';



function App() {


  const [restaurants, setRestaurants] = useState([]);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);


  const handleFavoriteToggle = (restaurantId) => {
    const isFavorite = favorites.includes(restaurantId);
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== restaurantId));
    } else {
      setFavorites([...favorites, restaurantId]);
    }
  };

  return (
    <div className="App">
      <RestaurantDetails
        data={restaurants}
        setRestaurants={setRestaurants}
        favorites={favorites}
        handleFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
}

export default App;
