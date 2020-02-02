import React from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './home';
import Search from './search';
import Mark from './mark';
import Next from './next';
import ShareArticle from '../Home/shareArticle'
const NavigatorHome = createStackNavigator({
  Home: {
    screen: Home,
    
  },
  Search: {
    screen: Search,
  },
  Mark: {
    screen: Mark,
  },
  ShareArticle:{
    screen:ShareArticle
  }

  // DrawerNavigator:{
  //  screen:DrawerNavigator
  // },
  // Next: {
  //   screen: Next,
  // },
  // Login: {
  //   screen: Login,
  // },
},{
  headerMode:'none',
  initialRouteName:'Home',
});
const  AppContainer =  createAppContainer(NavigatorHome)
export default  AppContainer
    
