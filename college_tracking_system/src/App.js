
import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';


function App() {
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="App">
      <Dashboard showForm={showForm} onToggle={handleToggle} />
    </div>
  );
}

export default App;
