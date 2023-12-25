import React, { createContext, useContext, useState } from 'react';

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalTerminated: 0,
    totalPromoted: 0,
    totalNew: 0,
  });

  const updateStats = (key, value) => {
    if (key === 'totalEmployees') {
      setStats((prevStats) => ({ ...prevStats, totalEmployees: prevStats.totalEmployees + value }));
    } else {
      setStats((prevStats) => ({ ...prevStats, [key]: prevStats[key] + value }));
    }
  };

  return (
    <StatsContext.Provider value={{ stats, updateStats }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => useContext(StatsContext);
