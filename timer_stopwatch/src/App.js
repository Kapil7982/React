
import { useState } from 'react';
import './App.css';

import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {

  const [activeTab, setActiveTab] = useState("stopwatch");
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);

  const handleTabChange  = (tab) =>{
    setActiveTab(tab);
  }


  return (
    <div className="App">
     <div>
      <button onClick={() => handleTabChange('stopwatch')}>Stopwatch</button>
      <button onClick={() => handleTabChange('timer')}>Timer</button>
     </div>
     {activeTab === 'stopwatch' ? (
        <Stopwatch
          seconds={stopwatchSeconds}
          setSeconds={setStopwatchSeconds}
        />
      ) : (
        <Timer seconds={timerSeconds} setSeconds={setTimerSeconds} />
      )}
    </div>
  );
};



export default App;
