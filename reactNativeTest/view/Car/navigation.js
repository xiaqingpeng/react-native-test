import React from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Car from './FirstPage/index';
import Login from '../Login/login';
import Introduce from './SecondPage/introduce';

const NavigatorCar = createStackNavigator(
  {
    Car: {
      screen: Car,
    },
    Login: {
      screen: Login,
    },
    Introduce: {
      screen: Introduce,
     
    },
  },
  {
    initialRouteName: 'Car',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
       //  console.log(navigation);
        return {
          tabBarVisible: navigation.state.index === 0,
        };
      },
  },
);

export default NavigatorCar;
