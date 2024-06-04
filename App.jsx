import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Intro from './pages/Intro';
import BottomTabs from './components/BottomTabs';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';


const Stack = createStackNavigator();

export default function App() {
  return (
    
    
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="BottomTabs" component={BottomTabs}  options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
