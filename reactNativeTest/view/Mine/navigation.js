import React from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Mine from './index';
import Login from '../Login/login';
import Bill from './Bill/index';
import Setting from '../Setting/index';
const NavigatorMine = createStackNavigator(
  {
    Mine: {
      screen: Mine,
    },
    Bill:{
      screen:Bill,
      navigationOptions:{
        headerShown:false
      }
    },
    Setting:{
      screen: Setting,
      navigationOptions:{
        headerShown:false
      }
    },
    Login: {
      screen: Login,
      navigationOptions:{
        headerShown:false
      }
    },
  },
  {
    initialRouteName: 'Mine',
    navigationOptions: ({navigation}) => {
       console.log(navigation.state.index)
      return {
        tabBarVisible:[0,2].includes(navigation.state.index),
      };
    },
  },
);


export  default  NavigatorMine
