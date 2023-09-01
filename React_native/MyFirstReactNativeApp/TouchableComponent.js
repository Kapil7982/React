import React, {useState } from "react";

import { View  } from "react-native";
import { Text, Button } from "react-native-elements";

function TouchableComponent(){

    const [backgroundColor, setBackgroundColor] = useState('lightblue');


    const changeBackgroundColor = ()=>{

        const randomColor = `#${Math.floor(Math.random() * 166777215).toString(16)}`;
        setBackgroundColor(randomColor);
    };

    return (
     
        <View>
        <Button

        title="Tap me!"
        onPress={changeBackgroundColor}
        containerStyle={{backgroundColor}}
        />

        <Text h4Style={{color:'black'}} > Hello , React Native Elements!</Text>
        
      </View>
    )
}

export default TouchableComponent;