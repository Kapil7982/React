import React, {useState} from "react";

import { View, Text, Button } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

function CounterApp(){

    const [count, setCount]= useState(0);

    const incrementCount = () =>{
        setCount(count+1);

    };

    const decrementCount = () =>{

        setCount(count -1);
    };

    return (

        <View>
            <Text>Counter: {count}</Text>
            <Button title="Increment" onPress={incrementCount}/>
            <Button title="Decrement" onPress={decrementCount}/>
            
        </View>
    )
}

export default CounterApp;