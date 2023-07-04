import React from "react";
import { useState } from "react";

const Counter = ({inititalValue}) =>{

    const [counter, setCounter] = useState(Number(inititalValue));

    const handleIncrement = () =>{
        setCounter(counter + 1);
    }

    const handleDecrement = () =>{
        setCounter(counter - 1);
    }

    const handleDouble = () =>{
        setCounter(counter * 2);
    }

    const counterColor = counter%2 === 0 ? 'green' : 'red';

    return (
        <div>
            <h2 style={{color: counterColor}}>{counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleDouble}>Double</button>
        </div>
    );
};

export default Counter;