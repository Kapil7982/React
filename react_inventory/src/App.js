import React, {useState,useEffect} from 'react';
import './App.css';


function App() {

  const [inventory,setInventory] = useState({
    books:5,
    pens:3,
    notebooks:2
  });

  const handleIncrement = (item) =>{
    setInventory((prevInventory) => ({...prevInventory, [item]:prevInventory[item]+1}));
  };


  const handleDecrement = (item) =>{
    setInventory((prevInventory) => ({...prevInventory, [item]:Math.max(prevInventory[item]-1,0)}));
  };

  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const calculateTotal = ()=>{
      const {books, pens, notebooks} = inventory;

      setTotal(books+pens+notebooks);
    };

    calculateTotal();
  },[inventory]);

  return (
    <div className="container">
      <div className='item'>
        <h2>Books:{inventory.books}</h2>
        <button onClick={() => handleIncrement('books')}>+</button>
        <button onClick={() => handleDecrement('books')}>-</button>
      </div>
      <div className='item'>
        <h2>Pens:{inventory.pens}</h2>
        <button onClick={() => handleIncrement('pens')}>+</button>
        <button onClick={() => handleDecrement('pens')}>-</button>
      </div>
      <div className='item'>
        <h2>Notebooks:{inventory.notebooks}</h2>
        <button onClick={() => handleIncrement('notebooks')}>+</button>
        <button onClick={() => handleDecrement('notebooks')}>-</button>
      </div>

      <div className='total'>
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
}

export default App;
