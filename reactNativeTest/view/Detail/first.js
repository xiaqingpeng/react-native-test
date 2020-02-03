import React, {Component, Fragment} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import EpidemicSituation from './Tab/epidemicSituation';
import Consult from './Tab/consult';
import Expression from './Tab/expression';
import Prevent from './Tab/prevent';

const TopNavigator = createMaterialTopTabNavigator(
  {
    EpidemicSituation: {
      screen: EpidemicSituation,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '实时疫情',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          console.log(focused, horizontal, tintColor);
        },
      }),
    },
    Consult: {
      screen: Consult,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '实时咨询',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          console.log(focused, horizontal, tintColor);
        },
      }),
    },
    Expression: {
      screen: Expression,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '症状表现',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          console.log(focused, horizontal, tintColor);
        },
      }),
    },
    Prevent: {
      screen: Prevent,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '如何预防',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          console.log(focused, horizontal, tintColor);
        },
      }),
    },
  },
  { initialRouteName:'EpidemicSituation',
    tabBarPosition: 'top', //标签栏在屏幕顶部还是底部
    // swipeEnabled:true,
    // animationEnabled: true, //标签切换是否有动画效果
    tabBarOptions: {
      activeTintColor: '#24957e', //标签栏激活字体颜色
      inactiveTintColor: '#676767', //标签栏未激活字体颜色
      // showLabel: true, //是否显示标签栏
      labelStyle: {fontSize: 16}, //标签样式(可设置字体大小等)
      // showIcon: true, //是否显示标签栏上图标
      //scrollEnabled: true, //是否可以滚动标签栏目(当tab总数超过一屏)
      indicatorStyle: {height: 5, backgroundColor: 'white'}, //指示器样式 height：0则不显示
      style: {}, //设置整个tabbar样式(背景颜色等)
      tabStyle: {
        
       // backgroundColor: 'rgb(3,127,254)', 
        backgroundColor: 'white', 
        height: 60}, //设置单个tabbar样式
    },
  },
);

const TopNavigation = createAppContainer(TopNavigator);

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.blank}>
          <Text style={{fontSize:22}}>
             疫情实时跟踪
          </Text>
        </View>
        
        <TopNavigation></TopNavigation>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  blank: {
    height: 60,
    // backgroundColor: 'rgb(0,115,227)',
    backgroundColor: 'white',
    marginTop:20,
    justifyContent: 'center',
    alignItems:'center',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  },
});

export default Detail;
