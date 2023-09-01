import React from "react";

import { View, Text, Button } from "react-native";

function HomeScreen({navigation}){

    return (

        <View>
            <Text>Welcome to Home Screen!</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
            <Button title="Go to ItemList" onPress={() => navigation.navigate('Items')}/>
            <Button title="Go to Counter" onPress={() => navigation.navigate('Counter')}/>
            <Button title="Go to Touchable" onPress={() => navigation.navigate('Touchable')}/>
            <Button title="Go to Tab" onPress={() => navigation.navigate('Tab')}/>
            <Button title="Go to ApiData" onPress={() => navigation.navigate('ApiData')}/>
            <Button title="Go to AuthApi" onPress={() => navigation.navigate('AuthApi')}/>
        </View>
    )
}

export default HomeScreen;