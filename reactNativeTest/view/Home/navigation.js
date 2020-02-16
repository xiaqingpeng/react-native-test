import React from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './home';
import Search from './search';
import Mark from './mark';
import Next from './next';
import LinkItem from './LinkItem'
import Position from './position'
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
  },
  LinkItem:{
    screen:LinkItem
  },
  Position:{
    screen:Position
  }

  
},{
  headerMode:'none',
  initialRouteName:'Home',
});
const  AppContainer =  createAppContainer(NavigatorHome)
export default  AppContainer
    
