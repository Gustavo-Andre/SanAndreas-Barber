import * as React from 'react';
import { Text, View,  } from 'react-native';
import  {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rotas } from './abas/rotas';


const Tab = createBottomTabNavigator();

export default function App() {

  useEffect(() => {
    console.disableYellowBox = true;
}, [])
  
  return (
    <Rotas/>
  );
}
