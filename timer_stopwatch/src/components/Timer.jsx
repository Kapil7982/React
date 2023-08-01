import { useEffect, useState } from "react";

import './Timer.css';

const Timer = () =>{

    const [userInputSeconds, setUserInputSeconds] = useState('01:00:00');
    
    const [seconds, setSeconds] = useState(3600);

    const [isRunning, setIsRunnging] = useState(false);

    useEffect(() =>{
        
        let interval;

        if(isRunning && seconds >0){

            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds -1);
            }, 1000);
        }
        else if(seconds === 0)
        {
            setIsRunnging(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    const handleStart = () =>{
        if(!isRunning && seconds>0)
        {
            setIsRunnging(true);
        }
    };

    const handleStop = () =>{
        setIsRunnging(false);
    }

    const handleReset = () =>{
        setSeconds(convertTimeToSeconds(userInputSeconds));
        setIsRunnging(false);
    }

    const handleInputChange = (event) =>{

        setUserInputSeconds(event.target.value);
    }

    const convertTimeToSeconds = (time) =>{
        const [hh = '00', mm = '00', ss = '00'] = time.split(':');

        return parseInt(hh) * 3600 + parseInt(mm) * 60 +parseInt(ss);
    }

    return(

        <div className="timer-container">
            <div className="timer-input">
                <input type="text" value={userInputSeconds} onChange={handleInputChange} />
            </div> 
          <div className="timer-display">
              <span>
                {String(Math.floor(seconds/3600)).padStart(2,'0')}:
                {String(Math.floor((seconds%3600)/60)).padStart(2,'0')}:
                {String(seconds % 60).padStart(2,'0')}
              </span>
          </div>
          <div className="timer-controls">
            {!isRunning && <button onClick={handleStart}>Start</button>}
            {isRunning && <button onClick={handleStop}>Stop</button>}
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
    )
}

export default Timer;