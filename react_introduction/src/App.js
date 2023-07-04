import React from 'react';
import StaticCard from './StaticCard ';
import Logo from './Navbar/Logo';
import Links from './Navbar/Links';
import Button from './Navbar/Button';
import Counter from './CounterComponenet/Counter';
import './App.css';

function App() {

  return (
    <div>
      <div className="navbar">
        <Logo />
        <Links />
        <Button />
      </div>
      <div className="static-card">
        <StaticCard />
      </div>

      <div>
        <Counter inititalValue={0}/>
      </div>
    </div>

    
  );
}

export default App;
