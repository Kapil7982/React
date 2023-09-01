import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import CounterApp from './CounterApp';
import ItemList from './ItemLIst';
import TouchableComponent from './TouchableComponent';
import TabNavigation from './TabNavigation';
import ApiData from './ApiData';
import AuthApi from './AuthApi';
import StyledButton from './StyledButton';
import ConditionalStyles from './ConditionalStyles';



const Stack = createStackNavigator();


 function App() {

  const handleButtonPress = () =>{
    console.log("Button pressed");
    console.log(undefinedVariable);
  }

  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Counter' component={CounterApp}/>
      <Stack.Screen name='Details' component={DetailScreen}/>
      <Stack.Screen name='Items' component={ItemList}/>
      <Stack.Screen name='Touchable' component={TouchableComponent}/>
      <Stack.Screen name='Tab' component={TabNavigation}/>
      <Stack.Screen name='ApiData' component={ApiData}/>
      <Stack.Screen name='AuthApi' component={AuthApi}/>
    </Stack.Navigator>
      
    <View style={styles.container}>
      <StyledButton title="Press me" onPress={handleButtonPress}/>

      <Text style={styles.text}>My first React Native App!</Text>
      <CustomComponent/>
      <ConditionalStyles/>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConditionalStyles')}
      >
        <Text style={styles.text}>Go to Conditional Styles</Text>
      </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white'
  }
});


export default App;