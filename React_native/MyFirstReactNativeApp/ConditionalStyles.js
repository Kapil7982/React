import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


function ConditionalStyles(){

    const [isActive,  setIsActive] = useState(false);

    const toggleStyle = () =>{

        setIsActive(!isActive);
    }

    return (

        <View>
            <TouchableOpacity
            style={[styles.button, isActive ? styles.activeButton : null]}
            onPress={toggleStyle}
            >
                <Text style={styles.text}>Toggle Style</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    activeButton: {
      backgroundColor: 'green', // Change the background color when active
    },
    text: {
      color: 'white',
      textAlign: 'center',
    },
  });
  
  export default ConditionalStyles;