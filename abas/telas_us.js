import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import {InformarScreen} from './informar';
import {AlienScreen} from './alien';
import { ReprodutorScreen } from './reprodutor';
import { HomeScreen } from './home';
import { TrabalhoScreen } from './trabalho';
import { welcomeScreen } from './welcome';
import { LoginScreen } from './login';


const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();



function TabScreen(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            
            tabBarStyle: { display:'none'}
          })}
          
        >
              
            <Tab.Screen 
            name='Home'
            component={HomeScreen}
            options={{
            headerShown: false,
            }}
            />

            <Tab.Screen
            name='Aulas'
            component={ReprodutorScreen}
            options={{
              headerShown: false,
              tabBarVisible:false,
              }}
            />

            <Tab.Screen
            name='Downloads'
            component={AlienScreen}
            options={{
              headerShown: false,
              }}
            />

            <Tab.Screen
            name='Duvidas'
            component={InformarScreen}
            options={{
              headerShown: false
              }}
            />

            <Tab.Screen
            name='Trabalho'
            component={TrabalhoScreen}
            options={{
              headerShown: false
              }}
            />

    </Tab.Navigator>
  );
};



export function Telas(){

    return (
      <LoginStack.Navigator>
          <LoginStack.Screen
                name='Welcome'
                component={welcomeScreen}
                options={{
                headerShown: false
                }}
                />

          <LoginStack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                headerShown: false
                }}
                />

          <LoginStack.Screen
                name='TabNav'
                component={TabScreen}
                options={{
                headerShown: false
                }}
                />
      </LoginStack.Navigator>
    );
};