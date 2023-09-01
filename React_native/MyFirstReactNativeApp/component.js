import React from "react";

import { View, Text } from "react-native";

import { StyleSheet } from "react-native";

function CustomComponent(){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello from CustomComponent!</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'lightblue',
        padding:10,
    }, 
    text:{
        fontSize:18,
        fontWeight:'bold',
    },
})
export default CustomComponent;