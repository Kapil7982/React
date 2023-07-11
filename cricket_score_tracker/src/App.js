import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [score, setScore] = useState(76);
  const [wicket, setWicket] = useState(2);
  const [over, setOver] = useState(50);
  const [isIndiaWon, setIsIndiaWon] = useState(false);

  const increaseScore = (value) => {
    if (!isIndiaWon) {
      setScore(score + value);
      checkIfIndiaWon(score + value);
    }
  };

  const increaseWicket = () => {
    if (!isIndiaWon && wicket < 12) {
      setWicket(wicket + 1);
    }
  };

  const increaseBall = () => {
    if (!isIndiaWon) {
      setOver(over + 1);
    }
  };

  const checkIfIndiaWon = (newScore) => {
    if (newScore > 100) {
      setIsIndiaWon(true);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">Cricket Score Tracker</h1>
      </nav>
      <div className="score-container">
        <div className="score-item">
          Score: <span className="scoreCount">{score}</span>
        </div>
        <div className="score-item">
          Wickets: <span className="wicketCount">{wicket}</span>
        </div>
        <div className="score-item">
          Over: <span className="overCount">{over}</span>
        </div>
      </div>
      <div className="button-container">
        <div className="button-group">
          <button onClick={() => increaseScore(1)} disabled={isIndiaWon}>
            Add Score 1
          </button>
          <button onClick={() => increaseScore(4)} disabled={isIndiaWon}>
            Add Score 4
          </button>
          <button onClick={() => increaseScore(6)} disabled={isIndiaWon}>
            Add Score 6
          </button>
        </div>
        <div className="button-group">
          <button onClick={increaseWicket} disabled={isIndiaWon}>
            Add Wicket
          </button>
        </div>
        <div className="button-group">
          <button onClick={increaseBall} disabled={isIndiaWon}>
            Add Ball
          </button>
        </div>
      </div>
      {isIndiaWon && <h1 className="status">India Won</h1>}
    </div>
  );
};

export default App;
