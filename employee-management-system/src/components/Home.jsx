import React from 'react';
import { useStats } from '../contexts/StatsContext';
import './Home.css';

const Home = () => {
  const { stats } = useStats();

  return (
    <div className="container">
      <h2>Home</h2>
      <p>Total Employees: {stats.totalEmployees}</p>
      <p>Total Terminated: {stats.totalTerminated}</p>
      <p>Total Promoted: {stats.totalPromoted}</p>
      <p>Total New: {stats.totalNew}</p>
    </div>
  );
};

export default Home;
