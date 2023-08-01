import { useEffect, useState } from "react";

import './Stopwatch.css';

const Stopwatch = () =>{

    const [seconds, SetSeconds]= useState(0);

    const [milliseconds, setMilliseonds] = useState(0);

    const [isRunning, setIsRunnging] = useState(false);

    
    useEffect(() =>{
        let interval;

        if(isRunning)
        {
            interval = setInterval(() => {
                
                if(milliseconds === 99)
                {
                    setMilliseonds(0);
                    SetSeconds((prevSeconds) => prevSeconds +1);
                }
                else
                {
                    setMilliseonds((prevMilliseconds) =>prevMilliseconds +1);
                }
            }, 10);
        }

        return () => clearInterval(interval);
    }, [isRunning, milliseconds]);

    const handleStart = () =>{
        if(!isRunning)
        {
            setIsRunnging(true);
        }
    };

    const handleStop = () =>{
        setIsRunnging(false);
    };

    const handleReset = () =>{

        SetSeconds(0);
        setMilliseonds(0);
        setIsRunnging(false);
    };

    return (

        <div className="stopwatch-container">
            <div className="stopwatch-display">
               
               <span>
                {String(Math.floor(seconds/3600)).padStart(2,'0')}:
                {String(Math.floor((seconds%3600)/60)).padStart(2,'0')}:
                {String(seconds % 60).padStart(2,'0')}
              </span>
               
               <span>:</span>
               <span>{String(milliseconds).padStart(2, '0')}</span>
            </div>
            <div>
                {!isRunning && <button onClick={handleStart}>Start</button>}
                {isRunning && <button onClick={handleStop}>Stop</button>}
                <button onClick={handleReset}>Reset</button>
                
            </div>
        </div>
    );
};

export default Stopwatch;