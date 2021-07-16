import 'react-native-gesture-handler'
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import Card from './screens/Card'
import Cash from './screens/Cash'

//const Tab = createMaterialTopTabNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          labelStyle:{fontSize:15,marginBottom:2},
          activeTintColor: '#9932CC',
          inactiveTintColor: 'gray',
          style:{
            //position:'absolute',
            bottom:0,
            left:0,
            right:0,
            elevation:2,
            backgroundColor:'#ffffff',
            borderTopRightRadius:15,
            borderTopLeftRadius:15,
            height:65
          } 
        }} 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home-sharp'
                : 'md-home-outline';
            } else if (route.name === "Dinheiro") {
              iconName = focused ? 'cash' : 'md-cash-outline';
            }else if (route.name === "Cartão") {
              iconName = focused ? 'card' : 'card-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
          >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dinheiro" component={Cash} />
        <Tab.Screen name="Cartão" component={Card} />

        </Tab.Navigator>
    </NavigationContainer>
  );
}


