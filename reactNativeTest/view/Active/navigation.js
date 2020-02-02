import React from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Active from './index';
import Login from '../Login/login';


const NavigatorActive = createStackNavigator(
  {
    Active: {
      screen: Active,
    },
    Login: {
      screen: Login,
    }
  },
  {
    initialRouteName: 'Active',
    headerMode:'none',
    navigationOptions: ({navigation}) => {
     // console.log(navigation);
      return {
        tabBarVisible: navigation.state.index === 0,
      };
    },
  },
);

export default NavigatorActive;
