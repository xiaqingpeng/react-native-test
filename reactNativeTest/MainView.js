import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import InitPage from './view/InitPage';
import Login from './view/Login/login.js'
import DrawerNavigator from './Navigation/DrawerNavigator';
 const AppInitNavigator = createAppContainer(createStackNavigator({
  InitPage: {
    screen: InitPage,
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
  DrawerNavigator:{
    screen:DrawerNavigator,
    navigationOptions:{
     headerShown:false
    }
  } 
}));

 const RootNavigator = createSwitchNavigator(
  {
    Navigation:AppInitNavigator ,
    DrawerNavigator: DrawerNavigator,
  }
);
export default createAppContainer(RootNavigator) 