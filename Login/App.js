import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login'
import Home from './components/Home'


const Stack =createStackNavigator()

export default function App() {
  
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{
          title: null,
          headerStyle: {
            backgroundColor: '#009387'},headerShown:false}}
        />
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: null,
          headerStyle: {
            backgroundColor: '#009387'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  }
