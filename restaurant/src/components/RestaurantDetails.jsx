import React, { useState, useEffect } from 'react';

const ITEMS_PER_PAGE = 5;

const RestaurantDetails = ({ data, setRestaurants, favorites, handleFavoriteToggle }) => {


  const [currentPage, setCurrentPage] = useState(1);

 
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1); 
  }, [data]);

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  const [sortOrder, setSortOrder] = useState('default');

  const handleSortByCost = (order) => {
    let sortedRestaurants = [...data];
    if (order === 'highToLow') {
      sortedRestaurants.sort((a, b) => b.costForTwo - a.costForTwo);
    } else if (order === 'lowToHigh') {
      sortedRestaurants.sort((a, b) => a.costForTwo - b.costForTwo);
    }
    setSortOrder(order);
    setRestaurants(sortedRestaurants);
  };

  

  const handleSortByRatings = (rating) => {
    const filteredRestaurants = data.filter((restaurant) => restaurant.ratings > rating);
    const sortedRestaurants = [...filteredRestaurants].sort((a, b) => b.ratings - a.ratings);
    setRestaurants(sortedRestaurants);
  };

  const handleFilterByPayment = (paymentMethod) => {
    if (paymentMethod === 'cash') {
      const cashOnlyRestaurants = data.filter(
        (restaurant) => restaurant.paymentMethods.includes('Cash')
      );
      setRestaurants(cashOnlyRestaurants);
    } else if (paymentMethod === 'card') {
      const cardAcceptedRestaurants = data.filter(
        (restaurant) => restaurant.paymentMethods.includes('Online')
      );
      setRestaurants(cardAcceptedRestaurants);
    } else if(paymentMethod === 'all'){
      const bothAcceptedRestaurants = data.filter(
        (restaurant) => restaurant.paymentMethods.includes('All')
      );
      setRestaurants(bothAcceptedRestaurants);
    }
  };


  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    image: '',
    categories: [],
    ratings:0,
    votes: 0,
    reviews: 0,
    costForTwo: 0,
    deliveryTime: '',
    paymentMethods: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'categories' || name === 'paymentMethods') {
      const valuesArray = value.split(',').map((item) => item.trim());
      setNewRestaurant({ ...newRestaurant, [name]: valuesArray });
    } else {
      setNewRestaurant({ ...newRestaurant, [name]: value });
    }
  };

  const handleAddRestaurant = () => {
    
    fetch('http://localhost:8080/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((data) => {
       
        setRestaurants((prevRestaurants) => [...prevRestaurants, data]);
        console.log('New restaurant added:', data);
      })
      .catch((error) => {
        console.error('Error adding new restaurant:', error);
      });

    setNewRestaurant({
      name: '',
      image: '',
      categories: [],
      ratings:0,
      votes: 0,
      reviews: 0,
      costForTwo: 0,
      deliveryTime: '',
      paymentMethods: []
    });
  };

  return (

    
    <div className="restaurant-container">
      <h2>Add the Resturant</h2>
       <form className="new-restaurant-form">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={newRestaurant.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newRestaurant.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="categories"
          placeholder="Categories (comma-separated)"
          value={newRestaurant.categories.join(',')}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="ratings"
          placeholder="Rating"
          value={newRestaurant.rating}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="votes"
          placeholder="Votes"
          value={newRestaurant.votes}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="reviews"
          placeholder="Reviews"
          value={newRestaurant.reviews}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="costForTwo"
          placeholder="Cost for One"
          value={newRestaurant.costForTwo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="deliveryTime"
          placeholder="Delivery Time"
          value={newRestaurant.deliveryTime}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="paymentMethods"
          placeholder="Payment Methods (comma-separated)"
          value={newRestaurant.paymentMethods.join(',')}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddRestaurant}>
          Add Restaurant
        </button>
      </form>

      <div className="sorting-buttons">
        <button onClick={() => handleSortByRatings(4)}>4 Star</button>
        <button onClick={() => handleSortByRatings(3)}>3 Star</button>
        <button onClick={() => handleSortByRatings(2)}>2 Star</button>
        <button onClick={() => handleSortByRatings(1)}>1 Star</button>
      </div>


      <div className="sorting-buttons">
        <button onClick={() => handleSortByCost('highToLow')}>Sort High to Low</button>
        <button onClick={() => handleSortByCost('lowToHigh')}>Sort Low to High</button>
      </div>

      <div className="payment-buttons">
        <button onClick={() => handleFilterByPayment('cash')}>Cash Only</button>
        <button onClick={() => handleFilterByPayment('card')}>Card Accepted</button>
        <button onClick={() => handleFilterByPayment('all')}>All</button>
      </div>

      <div className="restaurant-grid">
        {currentData.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.categories.join(', ')}</p>
            <p id='rate'>{restaurant.ratings}</p>
            <p>{restaurant.votes} votes</p>
            <p>Cost ₹{restaurant.costForTwo} for two</p>
            <p>{restaurant.reviews} reviews</p>
            <p>Min {restaurant.deliveryTime}</p>
            <p>Accepts {restaurant.paymentMethods.join(', ')} payments method</p>
            <button
        className="favorite-btn"
        onClick={() => handleFavoriteToggle(restaurant.id)}
      >
        {favorites.includes(restaurant.id) ? '❤️' : '🤍'}
      </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

     
    </div>
  );
};

export default RestaurantDetails;
