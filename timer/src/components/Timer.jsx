import React, {useState, useEffect, useRef} from "react";

export const Timer = ({intialTime, endTime}) =>{

    const [currentTime, setCurrentTime] = useState(intialTime);
    const intervalRef = useRef();

    useEffect(()=>{
         intervalRef.current = setInterval(() => {
            setCurrentTime((prevTime) =>prevTime+1);
        }, 1000);

        return () =>{
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(()=>{
        if(currentTime >= endTime)
        {
            clearInterval(intervalRef.current);
        }
    }, [currentTime, endTime]);

    return (
        <div>
            <h2>Timer: {currentTime} seconds</h2>
        </div>
    );

    


};
